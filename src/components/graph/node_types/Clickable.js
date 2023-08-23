// // import React, { useCallback, memo } from 'react';
// // import { Handle } from 'reactflow';

// // const CustomNode = ({ id, data, selected }) => {
// //   const handleClick = useCallback(async () => {
// //     console.log(`Node ${id} was clicked!`);

// //     // Fetch data from an API
// //     const response = await fetch('<URL>');
// //     const data = await response.json();
// //     console.log(data);
// //   }, [id]);

// //   return (
// //     <div onClick={handleClick}>
// //       <Handle type="target" position="top" />
// //       <div>{data.label}</div>
// //       <Handle type="source" position="bottom" />
// //     </div>
// //   );
// // };

// // export default memo(CustomNode);


// import React, { useCallback, memo } from 'react';
// import { Handle, useStoreState } from 'reactflow';

// const CustomNode = ({ id, data, selected }) => {
//   const handleClick = useCallback(async () => {
//     console.log(`Node ${id} was clicked!`);

//     // Fetch data from an API
//     const response = await fetch('<URL>');
//     const data = await response.json();
//     console.log(data);
//   }, [id]);

//   const isDragging = useStoreState((store) => store.nodesDraggable);

//   return (
//     <div
//       onClick={handleClick}
//       className={`p-2 rounded-md bg-white shadow-md ${
//         isDragging ? 'cursor-move' : ''
//       }`}
//     >
//       <Handle type="target" position="top" style={{ height: '10px', width: '10px', backgroundColor: '#000' }} />
//       <div>{data.label}</div>
//       <Handle type="source" position="bottom" style={{ height: '10px', width: '10px', backgroundColor: '#000' }} />
//     </div>
//   );
// };

// export default memo(CustomNode);


import React, { useCallback, memo } from 'react';
import { Handle, useStore } from 'reactflow';

const CustomNode = ({ id, data, selected }) => {
  const handleClick = useCallback(async () => {
    console.log(`Node ${id} was clicked!`);

    // Fetch data from an API
    const response = await fetch('<URL>');
    const data = await response.json();
    console.log(data);
  }, [id]);

  const store = useStore();
  const isDragging = store //.getState().nodesDraggable; // i need to understand what this contains 
  console.log("isDragging", isDragging, "poop" , isDragging.getNodes())
  return (
    <div
      onClick={handleClick}
      className={`p-5 rounded-md bg-blue-300 shadow-md transition-colors duration-300 hover:bg-blue-500 hover:scale-110 focus:bg-blue-700`}   >
      
      <Handle type="target" position="top" style={{ height: '10px', width: '10px', backgroundColor: '#000' }} />
      <div>{data.label}</div>
      <Handle type="source" position="bottom" style={{ height: '10px', width: '10px', backgroundColor: '#000' }} />
    </div>
  );
};

export default memo(CustomNode);
