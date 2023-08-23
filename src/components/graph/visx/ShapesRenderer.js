import React from "react";
// import { createRoot } from 'react-dom/client';
import ParentSize from "@visx/responsive/lib/components/ParentSize";

import Example from "./Shapes";

import {Loading} from '../../loading/Loading'

export default function RenderLine({ backgroundColor, isHovered, randomizeColor, handleSubmit, isLoading}) {

  console.log("i is in renderer", isLoading)
  return (
    <div style={{ width: 300, height: 80 }}>
      <ParentSize>
        {({ width, height }) => (
          <Example
            handleSubmit={handleSubmit}
            width={width}
            backgroundColor={backgroundColor}
            height={height}
            isHovered={isHovered}
            randomizeColor={randomizeColor}
            isLoading={isLoading}
          />
        )}
      </ParentSize>
    </div>
  );
}
