import { memo, useCallback } from "react";
import { Handle, Position, NodeResizer } from "reactflow";
import Link from "next/link";

const TechAcquisitions = ({ data, isConnectable }) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <Link href={data.link} target="_blank">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.title}
        </h5>
      </Link>

      {data.description && (
        <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
          {data.description}
        </p>
      )}

      <Handle
        id="bottom_source"
        type="source"
        position={Position.Bottom}
        className="Bottom-s"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Top}
        id="top_source"
        className="Top-s"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="left_source"
        className="Left-s"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right_source"
        className="Right-10"
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right_target"
        className="Right-T"
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left_target"
        className="Left-T"
      />
      <Handle
        type="target"
        position={Position.Top}
        id="top_target"
        className="top-5-T"
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom_target"
        className="Bottom-s"
      />
    </div>
  );
};

export default TechAcquisitions;
