import React from "react";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";
// https://ordinarycoders.com/blog/article/17-tailwindcss-cards

export function Heading_Node({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node text-white bg-gray-800 text-3xl font-mono   p-5">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Left}
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
      <h4 className="font-bold">
        Hi, I&apos;m Kai Kleinbard, a technologist exploring the intersection of
        somatics and artificial intelligence{" "}
      </h4>

      <p className="mt-2 text-xl">
        {" "}
        Here is a slection of education apps, mindfulness and deep learnings
        experiments I have conducted in 2023. &nbsp;&nbsp;
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 mt-5 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          {" "}
          Contact Me!
        </button>{" "}
      </p>
    </div>
  );
}
