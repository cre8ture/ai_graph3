// import { memo, useCallback } from "react";
// import { Handle, Position, NodeResizer } from "reactflow";

// const ResizableNodeSelected = ({ data, selected, isConnectable }) => {
//   const onChange = useCallback((evt) => {
//     console.log(evt.target.value);
//   }, []);
//   return (
//     <>
//       <div className="text-updater-node bg-white border h-full border-gray-300  rounded">
//         <NodeResizer
//           color="#ff0071"
//           isVisible={selected}
//           minWidth={100}
//           minHeight={100}
//         />
//         <Handle id="left_targ" type="target" position={Position.Left} />
//         <div style={{ padding: 10 }}>{data.label}</div>
//         <Handle
//           id="top_targ"
//           type="target"
//           position={Position.Top}
//           isConnectable={isConnectable}
//         />
//         <textarea
//           id="text"
//           name="text"
//           onChange={onChange}
//           className="text-gray-700 h-full nodrag p-5"
//           placeholder="enter the title of your node"
//           style={{ width: "100%", height: "100%" }}
//         ></textarea>
//         <Handle
//           type="source"
//           position={Position.Bottom}
//           id="bottom_new"
//           className="Bottom-10"
//           isConnectable={isConnectable}
//         />
//         <Handle
//           type="source"
//           position={Position.Top}
//           id="top_new"
//           className="Top-10"
//           isConnectable={isConnectable}
//         />
//         <Handle
//           type="source"
//           position={Position.Left}
//           id="left_new"
//           className="Left-10"
//           isConnectable={isConnectable}
//         />
//         <Handle
//           type="source"
//           position={Position.Right}
//           id="right_new"
//           className="Right-10"
//         />
//       </div>
//     </>
//   );
// };

// export default memo(ResizableNodeSelected);

import { memo, useCallback } from "react";
import { Handle, Position, NodeResizer } from "reactflow";
import "./handles.css";

const ResizableNodeSelected = ({ data, selected, isConnectable }) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  const onChangeTA = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  return (
    <>
      <div
        className="p-10"
        style={{ background: "transparent", border: "1px solid black" }} //, zIndex: 20 }}
        // draggable
      >
        <NodeResizer
          // color="#ff0071"
          isVisible={selected}
          minWidth={200}
          minHeight={180}
          // width="300px"
          // height="300px"
        />
        <textarea
          id="text"
          name="text"
          onChange={onChangeTA}
          // className="h-full"
          placeholder="/ for ai or type anything to save"
          // draggable
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
            color: "red",
            overflow: "hidden",
            resize: "none",
            border: "none",
          }}
        ></textarea>
        <div style={{ padding: 1 }}>{data.label}</div>

        <Handle
          type="target"
          id="left_target"
          position={Position.Left}
          className="large-handle"
          // style={{ background: "red" }}
          isConnectable={true}
          style={{ background: "#0000FF", width: "15px", height: "15px" }}
        />
        <Handle
          type="target"
          id="top_target"
          position={Position.Top}
          isConnectable={true}
          // isConnectable={isConnectable}
          className="large-handle"
          style={{ background: "#0000FF", width: "15px", height: "15px" }}
        />

        <Handle
          type="target"
          id="right_target"
          position={Position.Right}
          className="large-handle"
          // style={{ background: "red" }}
          // isConnectable={isConnectable}
          isConnectable={true}
          style={{ background: "#0000FF", width: "15px", height: "15px" }}
        />
        <Handle
          type="target"
          id="bottom_target"
          position={Position.Bottom}
          // isConnectable={isConnectable}
          isConnectable={true}
          style={{ background: "#0000FF", width: "15px", height: "15px" }}
        />

        <Handle
          type="source"
          position={Position.Bottom}
          id="bottom_source"
          // isConnectable={isConnectable}
          className="large-handle"
          isConnectable={true}
          style={{ background: "#0000FF", width: "15px", height: "15px" }}
        />
        <Handle
          type="source"
          position={Position.Top}
          id="top_source"
          className="Bottom-10"
          isConnectable={true}
          // isConnectable={isConnectable}
          style={{ background: "#0000FF", width: "15px", height: "15px" }}
        />
        <Handle
          type="source"
          position={Position.Left}
          id="left_source"
          // className="Left-10"
          className="large-handle"
          isConnectable={true}
          // isConnectable={isConnectable}
          style={{ background: "#0000FF", width: "15px", height: "15px" }}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="right_source"
          isConnectable={true}
          // isConnectable={isConnectable}
          // className="Right-10"
          className="large-handle"
          style={{ background: "#0000FF", width: "15px", height: "15px" }}
        />
      </div>
    </>
  );
};

export default memo(ResizableNodeSelected);
