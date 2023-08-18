// import React, { useState, useEffect } from "react";
// import Graph from "../graph/Graph_fix";
// import RandomButton from "../buttons/RandomButton";

// const GraphWithPdfInputOverlay = ({
//   getText,
//   getHighlightedText,
//   getIsHighlightedText,
// }) => {
//   const [backgroundColor, setBackgroundColor] = useState("#ffff99");
//   const [hoverColor, setHoverColor] = useState("#fff999");

//   console.log("hoverColor", hoverColor);
//   const randomizeColor = () => {
//     // Generate a random color and update the state
//     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     // setBackgroundColor(randomColor);
//     return randomColor;
//   };

//   function handleClickColor() {
//     setBackgroundColor(randomizeColor);
//   }
//   function handleHoverColor() {
//     setHoverColor(randomizeColor);
//   }

//   return (
//     <div
//       style={{
//         backgroundColor: backgroundColor,
//         width: "100%",
//         height: "100%",
//       }}
//     >
//       <div
//         style={{
//           position: "relative",
//           height: "100%",
//           backgroundColor: "transparent",
//         }}
//       >
//         <button
//           className={`bg-transparent mt-3 hover:bg-${hoverColor} text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}
//           onClick={handleClickColor}
//           onMouseEnter={handleHoverColor}
//           style={{ padding: "10px", fontSize: "20px" }} // color: hoverColor }}
//         >
//           Randomize Color
//         </button>
//         {/* <RandomButton /> */}
//         {/* Graph component */}
//         <div
//           style={{
//             position: "absolute",
//             // top: 100, // Adjust the top offset here
//             // left: 0,
//             // width: "80%",
//             backgroundColor: "transparent",
//             height: `calc(100% - 25%)`, // Adjust the offset and subtract from total height
//             zIndex: 20,
//           }}
//         >
//           <Graph
//             backgroundColor={backgroundColor}
//             // Pass required props to the Graph component
//             style={
//               {
//                 // Adjust styles as needed
//                 // width: "100%",
//               }
//             }
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GraphWithPdfInputOverlay;

import React, { useState, useEffect, useRef } from "react";
import Graph from "../graph/Graph_fix";
// import RandomButton from "../buttons/RandomButton";
import Input from "../input/Input";
// import ChoiceButtons from "../buttons/ChoiceButtons";
// import Lines from "../graph/visx/LineRenderer";
import Lines from "../graph/visx/ShapesRenderer";
import { gpt3 } from '../brains/gpt3'
import * as acorn from 'acorn';
import Loading from "../loading/Loading";


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
  const [graphCount, setGraphCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)


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

    if(inputValue.length < 3)
    {
      return 'error: not enough input. Try writing a full word or sentence'
    }
    setIsLoading(true)
    setGraphCount(graphCount+1)
    const inputValue = inputText
    console.log("dude!", inputValue)


    try {
        console.log("in")
        // Send a POST request to the API endpoint with the input data
        const response = await gpt3(inputValue)


        console.log("response", response)


        // Set the output state with the response data
        setOutput(response.toString());

        // eval(response.toString());

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
        {/* <button
          ref={buttonRef}
          className="bg-transparent mt-3 ml-3 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={randomizeColor}
          style={{ padding: "10px", fontSize: "20px" }}
        >
          Randomize Color
        </button> */}
        <div className="flex flex-col" style={{ width: "300px" }}>
          <Input className="mt-3 ml-3" setInputText={setInputText} setIsHovered={setIsHovered} />
          {/* <RandomButton /> */}
          {/* Graph component */}

         {isLoading ? <Loading/> : <Lines
            backgroundColor={backgroundColor}
            randomizeColor={randomizeColor}
            isHovered={isHovered}
            handleSubmit={handleSubmit}
          />}
          <div
            style={{
              position: "absolute",
              // top: 100, // Adjust the top offset here
              // left: 0,
              // width: "80%",
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
                // Adjust styles as needed
                // width: "100%",
              }
            }
          />
        </div>
      </div>
    </div>
  );
};

export default GraphWithPdfInputOverlay;
