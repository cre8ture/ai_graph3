import { useCallback } from "react";
import { Handle, Position } from "reactflow";
// https://ordinarycoders.com/blog/article/17-tailwindcss-cards

function TextUpdaterNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node font-mono bg-white h-50px border border-gray-300 p-5 rounded transform transition-all">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className="text-xl text-black">{data.title}</div>
      <div>
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
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default TextUpdaterNode;
