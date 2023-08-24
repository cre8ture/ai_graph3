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


import React, { useCallback, memo, useState } from 'react';
import { Handle, useStore } from 'reactflow';
import {gpt3_expand_node} from '../../brains/gpt3_expand_node'

const CustomNode = ({ id, data, selected }) => {
  const [clicked, setClicked] = useState(false)

  
  const store = useStore();
  const isDragging = store //.getState().nodesDraggable; // i need to understand what this contains 
  console.log("cs", isDragging, "poop" , isDragging.getNodes())
  const nodes = isDragging.getNodes()
  // const nodes = store.getState().getNodes();
  const node = nodes.find((node) => node.id === id);
  console.log("i is node", node)

  const label = node.data.label
  const posX = node.position.x
  const posY = node.position.y

  const handleClick = useCallback(async () => {

    console.log(`Node ${id} was clicked!`);

    // Fetch data from an API
    if(!clicked){
    const response = await gpt3_expand_node(label, posX, posY)
    const data = await response.json();
    console.log(data);
    setClicked(true)
}

  }, [id]);

  
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
