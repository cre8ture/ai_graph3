import { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";
// https://ordinarycoders.com/blog/article/17-tailwindcss-cards
const growWrapStyle = {
  display: "grid",
};

export const info_nodes = [
  {
    id: "7",
    type: "default",
    className: "annotation",
    data: {
      label: (
        <>
          <h4>hi 👋 I&apos;m Kai Kleinbard</h4>
          <p> This is a selection of some of my experiments</p>
          <p>
            This website is completely editable. You can <strong>delete</strong>{" "}
            any node by selecting it and press backspace
          </p>
          <p>
            You can <strong> add your own nodes</strong> by double clicking
            anywhere
          </p>
          <p>Drag point indicators on a node to connect them</p>
          <p>
            {" "}
            Edit this page and <button>
              Click here to Download this Map
            </button>{" "}
          </p>
        </>
      ),
    },
    draggable: true,
    selectable: true,
    position: { x: 0, y: -500 },
  },
];
