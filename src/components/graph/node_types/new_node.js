import { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";
// https://ordinarycoders.com/blog/article/17-tailwindcss-cards
const growWrapStyle = {
  display: "grid",
};

const replicatedValueStyle = {
  whiteSpace: "pre-wrap",
  visibility: "hidden",
  // border: '1px solid black',
  // padding: '0.5rem',
  font: "inherit",
  gridArea: "1 / 1 / 2 / 2",
};

const textareaStyle = {
  resize: "none",
  overflow: "hidden",
  // padding: '0.5rem',
  width: "100%",
  height: "100%",
  font: "inherit",
  gridArea: "1 / 1 / 2 / 2",
};

function TextUpdaterNode({ data, isConnectable }) {
  const [text, setText] = useState("");
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node font-mono bg-white border border-gray-300 rounded w-full h-full transform transition-all">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div style={growWrapStyle} data-replicated-value={text}>
        <div style={replicatedValueStyle}>{text} </div>
        <textarea
          style={textareaStyle}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
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
      </div>
    </div>
  );
}

export default TextUpdaterNode;
