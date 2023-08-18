// import { useCallback } from "react";
// import { Handle, Position } from "reactflow";
// import "./text-updater-node.module.css";

// const handleStyle = { left: 10 };

// function TextUpdaterNode({ data, isConnectable }) {
//   const onChange = useCallback((evt) => {
//     console.log(evt.target.value);
//   }, []);

//   return (
//     <div className="text-updater-node">
//       <Handle
//         type="target"
//         position={Position.Top}
//         isConnectable={isConnectable}
//       />
//       <div>
//         <label htmlFor="text">Text:</label>
//         <input id="text" name="text" onChange={onChange} className="nodrag" />
//       </div>
//       <Handle
//         type="source"
//         position={Position.Bottom}
//         id="a"
//         style={handleStyle}
//         isConnectable={isConnectable}
//       />
//       <Handle
//         type="source"
//         position={Position.Bottom}
//         id="b"
//         isConnectable={isConnectable}
//       />
//     </div>
//   );
// }

// export default TextUpdaterNode;

import { useCallback } from "react";
import { Handle, Position } from "reactflow";

function TextUpdaterNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node bg-white h-50px border border-gray-300 p-5 rounded">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>
        {/* <label htmlFor="text" className="block text-sm text-gray-700">
          Text:
        </label> */}
        <textarea
          // className="text-neutral-950"
          id="text"
          name="text"
          onChange={onChange}
          className=" text-gray-700 nodrag"
          placeholder="enter the title of your node"
        />
      </div>
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
  );
}

export default TextUpdaterNode;
