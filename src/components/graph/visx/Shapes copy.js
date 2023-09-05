

// export default PolygonComponent;
import React, { useState,useEffect } from "react";
import { Polygon } from "@visx/shape";
import { Group } from "@visx/group";
import { scaleBand } from "@visx/scale";
import { GradientPinkRed } from "@visx/gradient";
import {Loading} from '../../loading/Loading'

var background = "#7f82e3";
const polygonSize = 25;
const defaultMargin = { top: 10, right: 10, bottom: 10, left: 10 };


const PolygonComponent = ({
  width,
  height,
  backgroundColor,
  isHovered,
  randomizeColor,
  handleSubmit,
  isLoading,
}) => {
  const [fillColorSquare, setFillColorSquare] = useState("rgb(229, 253, 61)");
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    // Show the loading icon after a delay
    var timeoutId = ''
    if(isLoading){
     timeoutId = setTimeout(() => {
      setShowLoading(true);
    }, 250);
}
else{
  setShowLoading(false)
}
    // Clear the timeout when the component unmounts
    return () => {
      clearTimeout();
    };
  }, [isLoading]);

  let angle = 0;

// Define a function to increment the angle by 90 degrees
const rotateSquare = () => {
  angle = (angle + 90) % 360;
};



  // console.log("I am in shapes", isLoading)

  function triangleClick(a) {
    randomizeColor();
  }

  async function squareClick(e) {
    // e.preventDefault();
    const origColor = "rgb(229, 253, 61)"
    console.log(e)
    setTimeout(() => {
      setFillColorSquare('green');
    }, 100);
    setFillColorSquare(origColor)
    handleSubmit()
  }

  async function hexagonClick(e) {
    e.preventDefault();
  }

  const polygons = [
    {
      sides: 3,
      fill: "rgb(174, 238, 248)",
      rotate: 90,
      offset: 6,
      className: 'triangle',
      onClick: () => triangleClick("Triangle clicked!"),
    },
    {
      sides: 4,
      fill: fillColorSquare,//"rgb(229, 253, 61)",
      rotate: 45,
      offset: 0,
      className: 'square' ,
      onClick: () => squareClick("Square clicked!"),
    },
    {
      sides: 6,
      fill: "rgb(229, 130, 255)",
      rotate: 0,
      offset: 0,
      className: 'hexagon',
      onClick: () => console.log("Hexagon clicked!"),
    },
  ];

  // Use an xScale instead of a yScale
  const xScale = scaleBand({
    domain: polygons.map((p, i) => i),
    padding: 0.8,
  });
  // Update the range of the xScale based on the width
  xScale.rangeRound([0, width - defaultMargin.left - defaultMargin.right]);

  background = backgroundColor;
  // Calculate the centerY position
  const centerY = (height - defaultMargin.top - defaultMargin.bottom) / 2;

  // Add state to keep track of the fill color of the triangle
  const [triangleFill, setTriangleFill] = useState(polygons[0].fill);

  const handleMouseEnter = () => {
    // Generate a random color and update the state
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setTriangleFill(randomColor);
  };

  const handleMouseLeave = () => {
    // Reset the fill color of the triangle to its original color
    setTriangleFill(polygons[0].fill);
  };

  return (
    <div>
      <svg width={width} height={height}>
        <rect width={width} height={height} fill={background} rx={14} />
        <GradientPinkRed id="polygon-pink" />
        {polygons.map((polygon, i) => (
          <Group
            key={`polygon-${i}`}
            // Set the top property based on centerY
            top={defaultMargin.top + centerY + polygon.offset}
            // Set the left property based on xScale
            left={(xScale(i) || 0) + polygonSize / 2}
          >
            {i != 1 ? <Polygon
              sides={polygon.sides}
              size={polygonSize}
              // Use state for the fill color of the triangle
              fill={i === 0 ? triangleFill : polygon.fill}
              rotate={polygon.rotate}
              className={`polygon polygon-${i}`}
              onClick={polygon.onClick}
              // Add event handlers for mouseenter and mouseleave events
              onMouseEnter={i === 0 ? handleMouseEnter : undefined}
              onMouseLeave={i === 0 ? handleMouseLeave : undefined}
              style={{
                opacity: isHovered || i === 0 ? 1 : 0,
                transition:
                  isHovered || i === 0 ? "opacity 1.5s" : "opacity 1.5s",
              }}
            />: (

              !showLoading ? 
              <Polygon
              className={`polygon polygon-${i} ${isLoading && i === 1 ? 'rotate-continuous' : ''}`}
              sides={polygon.sides}
              size={polygonSize}
              fill={polygon.fill}
              rotate={polygon.rotate}
              // className={`polygon polygon-${i}`}
              onClick={polygon.onClick}
              onMouseEnter={i === 0 ? handleMouseEnter : undefined}
              onMouseLeave={i === 0 ? handleMouseLeave : undefined}
              style={{
                opacity: isHovered || i === 0 ? 1 : 0,
                transition: isHovered || i === 0 ? "opacity 1.5s" : "opacity 1.5s",
                pointerEvents: showLoading ? "none" : "auto", // Disable mouse events when loading
              }}
            />
            :
            (
//               <foreignObject
//   style={{
//     zIndex: 100,
//   }}
//   width={polygonSize}
//   height={polygonSize}
//   x={-polygonSize / 2}
//   y={-polygonSize / 2}
// >
//   <Loading />
// </foreignObject>
<Polygon
// className={`polygon polygon-${iS} rotate-continuous polygonMoo`}
className={`polygon-${i} rotate-continuous polygonMoo`}
sides={polygon.sides}
size={polygonSize}
fill={polygon.fill}
rotate={polygon.rotate}
// className={`polygon polygon-${i}`}
onClick={polygon.onClick}
onMouseEnter={i === 0 ? handleMouseEnter : undefined}
onMouseLeave={i === 0 ? handleMouseLeave : undefined}
style={{
  opacity: isHovered || i === 0 ? 1 : 0,
  transition: isHovered || i === 0 ? "opacity 1.5s" : "opacity 1.5s",
  pointerEvents: showLoading ? "none" : "auto", // Disable mouse events when loading
}}
/>
           )
            )}
            
          </Group>
        ))}
      </svg>
      {/* Add a style tag with CSS styles */}
      <style>
        {`
.polygon {
animation-name: rotate-back;
animation-duration:1s;
animation-fill-mode: forwards;
}

.polygon:hover {
animation-name: rotate;
animation-duration:1s;
animation-fill-mode: forwards;
}


  .polygonMoo.rotate-continuous {
    animation-name: rotate;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  
  

@keyframes rotate {
from {
transform: rotate(0deg);
}
to {
transform: rotate(90deg);
}
}

@keyframes rotate-back {
from {
transform: rotate(90deg);
}
to {
transform: rotate(0deg);
}
}
`}
      </style>
    </div>
  );
};

export default PolygonComponent;
