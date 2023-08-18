// import React, { useCallback, memo } from 'react';
// import { Handle } from 'reactflow';

// const CustomNode = ({ id, data, selected }) => {
//   const handleClick = useCallback(async () => {
//     console.log(`Node ${id} was clicked!`);

//     // Fetch data from an API
//     const response = await fetch('<URL>');
//     const data = await response.json();
//     console.log(data);
//   }, [id]);

//   return (
//     <div onClick={handleClick}>
//       <Handle type="target" position="top" />
//       <div>{data.label}</div>
//       <Handle type="source" position="bottom" />
//     </div>
//   );
// };

// export default memo(CustomNode);


import React, { useCallback, memo } from 'react';
import { Handle, useStoreState } from 'reactflow';

const CustomNode = ({ id, data, selected }) => {
  const handleClick = useCallback(async () => {
    console.log(`Node ${id} was clicked!`);

    // Fetch data from an API
    const response = await fetch('<URL>');
    const data = await response.json();
    console.log(data);
  }, [id]);

  const isDragging = useStoreState((store) => store.nodesDraggable);

  return (
    <div
      onClick={handleClick}
      className={`p-2 rounded-md bg-white shadow-md ${
        isDragging ? 'cursor-move' : ''
      }`}
    >
      <Handle type="target" position="top" style={{ height: '10px', width: '10px', backgroundColor: '#000' }} />
      <div>{data.label}</div>
      <Handle type="source" position="bottom" style={{ height: '10px', width: '10px', backgroundColor: '#000' }} />
    </div>
  );
};

export default memo(CustomNode);
