import React, { useState, useEffect, useRef } from "react";
import Graph from "../graph/Graph_fix";
import Input from "../input/Input";

import Lines from "../graph/visx/ShapesRenderer";
import { gpt3 } from '../brains/gpt3'
import Loading from '../loading/Loading'
import * as acorn from 'acorn';

const GraphWithPdfInputOverlay = ({
  getText,
  getHighlightedText,
  getIsHighlightedText,
}) => {
  const [backgroundColor, setBackgroundColor] = useState("#ffff99");
  const [isHovered, setIsHovered] = useState(false);
  const [newNodes, setNewNodes] = useState([])
  const [newEdges, setNewEdges] = useState([])
  const [inputText, setInputText] = useState('')
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [graphCount, setGraphCount] = useState(0)


  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      const originalColor = button.style.backgroundColor;
      const handleMouseEnter = () => {
        // Generate a random color
        const randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        // Set the background color of the button to the random color
        button.style.backgroundColor = randomColor;
      };
      const handleMouseLeave = () => {
        // Reset the background color of the button to its original color
        button.style.backgroundColor = originalColor;
      };
      // Add event listeners for the mouseenter and mouseleave events
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
      // Remove event listeners when the component unmounts
      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  console.log("backgroundColor", backgroundColor);
  const randomizeColor = () => {
    // Generate a random color and update the state
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };




  const handleSubmit = async () => {

    if (inputText.length < 3) {
      return 'error: not enough input. Try writing a full word or sentence'
    }
    setIsLoading(true)

    // setGraphCount(prevCount => {prevCount += 1})
    const inputValue = inputText
    console.log("dude!", inputValue)


    try {
      console.log("in")
      const response = await gpt3(inputValue)

      setOutput(await response.toString());

      const ast = acorn.parse(response, { ecmaVersion: 'latest' });
      const nodesDeclaration = ast.body.find(node => node.type === 'VariableDeclaration' && node.declarations[0].id.name === 'nodes');
      const edgesDeclaration = ast.body.find(node => node.type === 'VariableDeclaration' && node.declarations[0].id.name === 'edges');

      function reconstructObject(node) {
        if (node.type === 'ObjectExpression') {
          const obj = {};
          for (const property of node.properties) {
            obj[property.key.name] = reconstructObject(property.value);
          }
          return obj;
        } else if (node.type === 'ArrayExpression') {
          return node.elements.map(element => reconstructObject(element));
        } else if (node.type === 'Literal') {
          return node.value;
        }
      }

      const nodes = reconstructObject(nodesDeclaration.declarations[0].init);
      const edges = reconstructObject(edgesDeclaration.declarations[0].init);


      console.log("nodes", nodes);
      console.log("edges", edges);

      setNewNodes(nodes)
      setNewEdges(edges)

      setIsLoading(false)

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          backgroundColor: "transparent",
        }}
      >

        <div className="flex flex-col" style={{ width: "300px" }}>
          <Input className="mt-3 ml-3" setInputText={setInputText} setIsHovered={setIsHovered} />
          <Lines
            backgroundColor={backgroundColor}
            randomizeColor={randomizeColor}
            isHovered={isHovered}
            handleSubmit={handleSubmit}
          />
          <div
            style={{
              position: "absolute",

              backgroundColor: "transparent",
              height: `calc(100% - 25%)`, // Adjust the offset and subtract from total height
              zIndex: 20,
            }}
          ></div>
          <Graph
            backgroundColor={backgroundColor}
            newNodes={newNodes}
            newEdges={newEdges}
            // Pass required props to the Graph component
            style={
              {
              }
            }
          />
        </div>
      </div>
    </div>
  );
};

export default GraphWithPdfInputOverlay;
