import React from "react";
// import { createRoot } from 'react-dom/client';
import ParentSize from "@visx/responsive/lib/components/ParentSize";

import Example from "./Lines";

export default function RenderLine() {
  return (
    <div style={{ width: 500, height: 300 }}>
      <ParentSize>
        {({ width, height }) => <Example width={width} height={height} />}
      </ParentSize>
    </div>
  );
}
