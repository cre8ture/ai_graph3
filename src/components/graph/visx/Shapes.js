// import React, { useState } from "react";
// import { Polygon } from "@visx/shape";
// import { Group } from "@visx/group";
// import { scaleBand } from "@visx/scale";
// import { GradientPinkRed } from "@visx/gradient";

// var background = "#7f82e3";
// const polygonSize = 25;
// const defaultMargin = { top: 10, right: 10, bottom: 10, left: 10 };

// const polygons = [
//   {
//     sides: 3,
//     fill: "rgb(174, 238, 248)",
//     rotate: 90,
//     offset: 6,
//     onClick: () => console.log("Triangle clicked!"),
//   },
//   {
//     sides: 4,
//     fill: "rgb(229, 253, 61)",
//     rotate: 45,
//     offset: 0,
//     onClick: () => console.log("Square clicked!"),
//   },
//   {
//     sides: 6,
//     fill: "rgb(229, 130, 255)",
//     rotate: 0,
//     offset: 0,
//     onClick: () => console.log("Hexagon clicked!"),
//   },
// ];

// // Use an xScale instead of a yScale
// const xScale = scaleBand({
//   domain: polygons.map((p, i) => i),
//   padding: 0.8,
// });

// const PolygonComponent = ({ width, height, backgroundColor, isHovered }) => {
//   // Update the range of the xScale based on the width
//   xScale.rangeRound([0, width - defaultMargin.left - defaultMargin.right]);

//   background = backgroundColor;

//   // Calculate the centerY position
//   const centerY = (height - defaultMargin.top - defaultMargin.bottom) / 2;

//   // Add state to keep track of the fill color of the triangle
//   const [triangleFill, setTriangleFill] = useState(polygons[0].fill);

//   const handleMouseEnter = () => {
//     // Generate a random color and update the state
//     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     setTriangleFill(randomColor);
//   };

//   const handleMouseLeave = () => {
//     // Reset the fill color of the triangle to its original color
//     setTriangleFill(polygons[0].fill);
//   };

//   return (
//     <div>
//       <svg width={width} height={height}>
//         <rect width={width} height={height} fill={background} rx={14} />
//         <GradientPinkRed id="polygon-pink" />
//         {polygons.map((polygon, i) => (
//           <Group
//             key={`polygon-${i}`}
//             // Set the top property based on centerY
//             top={defaultMargin.top + centerY + polygon.offset}
//             // Set the left property based on xScale
//             left={(xScale(i) || 0) + polygonSize / 2}
//           >
//             <Polygon
//               sides={polygon.sides}
//               size={polygonSize}
//               // Use state for the fill color of the triangle
//               fill={i === 0 ? triangleFill : polygon.fill}
//               rotate={polygon.rotate}
//               className={`polygon polygon-${i}`}
//               onClick={polygon.onClick}
//               // Add event handlers for mouseenter and mouseleave events
//               onMouseEnter={i === 0 ? handleMouseEnter : undefined}
//               onMouseLeave={i === 0 ? handleMouseLeave : undefined}
//               style={{
//                 opacity: isHovered || i === 0 ? 1 : 0,
//                 transition: isHovered || i === 0 ? "opacity1s" : "opacity1.5s",
//               }}
//             />
//           </Group>
//         ))}
//       </svg>
//       {/* Add a style tag with CSS styles */}
//       <style>
//         {`
// .polygon {
// animation-name: rotate-back;
// animation-duration:1s;
// animation-fill-mode: forwards;
// }

// .polygon:hover {
// animation-name: rotate;
// animation-duration:1s;
// animation-fill-mode: forwards;
// }

// @keyframes rotate {
// from {
// transform: rotate(0deg);
// }
// to {
// transform: rotate(90deg);
// }
// }

// @keyframes rotate-back {
// from {
// transform: rotate(90deg);
// }
// to {
// transform: rotate(0deg);
// }
// }
// `}
//       </style>
//     </div>
//   );
// };

// export default PolygonComponent;
import React, { useState } from "react";
import { Polygon } from "@visx/shape";
import { Group } from "@visx/group";
import { scaleBand } from "@visx/scale";
import { GradientPinkRed } from "@visx/gradient";

var background = "#7f82e3";
const polygonSize = 25;
const defaultMargin = { top: 10, right: 10, bottom: 10, left: 10 };

// function triangleClick(a) {
//   console.log("COLOR", a);
// }

// async function squareClick(e) {
//   e.preventDefault();
// }

// async function hexagonClick(e) {
//   e.preventDefault();
// }

// const polygons = [
//   {
//     sides: 3,
//     fill: "rgb(174, 238, 248)",
//     rotate: 90,
//     offset: 6,
//     onClick: () => triangleClick("Triangle clicked!"),
//   },
//   {
//     sides: 4,
//     fill: "rgb(229, 253, 61)",
//     rotate: 45,
//     offset: 0,
//     onClick: () => console.log("Square clicked!"),
//   },
//   {
//     sides: 6,
//     fill: "rgb(229, 130, 255)",
//     rotate: 0,
//     offset: 0,
//     onClick: () => console.log("Hexagon clicked!"),
//   },
// ];

// // Use an xScale instead of a yScale
// const xScale = scaleBand({
//   domain: polygons.map((p, i) => i),
//   padding: 0.8,
// });

const PolygonComponent = ({
  width,
  height,
  backgroundColor,
  isHovered,
  randomizeColor,
  handleSubmit,
}) => {
  function triangleClick(a) {
    console.log("COLOR", a);
    randomizeColor();
  }

  async function squareClick(e) {
    // e.preventDefault();
    console.log(e)
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
      onClick: () => triangleClick("Triangle clicked!"),
    },
    {
      sides: 4,
      fill: "rgb(229, 253, 61)",
      rotate: 45,
      offset: 0,
      onClick: () => squareClick("Square clicked!"),
    },
    {
      sides: 6,
      fill: "rgb(229, 130, 255)",
      rotate: 0,
      offset: 0,
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
            <Polygon
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
            />
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
