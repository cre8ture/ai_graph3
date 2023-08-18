import React from "react";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";
// https://ordinarycoders.com/blog/article/17-tailwindcss-cards

export function How_To_Node({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node w-50px border rounded border-solid border-black bg-white font-mono p-5">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        className="left-10"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
      <h5 className="text-lg font-semibold">This site is editable:</h5>
      <h4 className="text-lg font-semibold">hi 👋 Hi, I&apos;m Kai Kleinbard</h4>
      <p className="mt-2">
        This is a selection of some of my experiments. This website is
        completely editable. You can{" "}
        <strong className="font-semibold">delete</strong> any node by selecting
        it and press backspace. You can{" "}
        <strong className="font-semibold">add your own nodes</strong> by double
        clicking anywhere. Drag point indicators on a node to connect them. Edit
        this page and 
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mx-2">
          Click here to Download this Map
        </button>{" "}
      </p>
    </div>
  );
}
