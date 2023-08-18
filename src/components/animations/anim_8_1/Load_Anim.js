import React from "react";
import FallingTextComponent from "./Anim_81";

const ParentComponent = ({text}) => {
  // const fakeText =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justo. Nulla facilisi. Nullam euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justo.";

  return <FallingTextComponent text={text} />;
};

export default ParentComponent;
// const ParentComponent = () => {
//   const fakeText =
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justo. Nulla facilisi. Nullam euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justo.orem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justo. Nulla facilisi. Nullam euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justoorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justo. Nulla facilisi. Nullam euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justoorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justo. Nulla facilisi. Nullam euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justoorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justo. Nulla facilisi. Nullam euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justo. orem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justo. Nulla facilisi. Nullam euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justoorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justo. Nulla facilisi. Nullam euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justoorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justo. Nulla facilisi. Nullam euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justoorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justo. Nulla facilisi. Nullam euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justo";

//   const words = fakeText.split(" ");
//   const chunkSize = 5;
//   const chunks = [];
//   for (let i = 0; i < words.length; i += chunkSize) {
//     chunks.push(words.slice(i, i + chunkSize).join(" "));
//   }

//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       {chunks.map((chunk, index) => (
//         <FallingTextComponent key={index} text={chunk} />
//       ))}
//     </div>
//   );
// };

// export default ParentComponent;
