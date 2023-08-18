import React from "react";
// import ImageBreaker from "./pixelate";
import ImageBreaker3 from "./pixelate_imgs";

// import ImageBreaker2 from "./pixelate2";

const App = () => (
  <div style={{ width: "100%", height: "100%" }}>
    {/* <ImageBreaker src="./kk.jpg" rows={10} columns={10} /> */}
    <ImageBreaker3 src="./kk.jpg" rows={10} cols={10} />
    {/* <ImageBreaker2 src="./kk.jpg" rows={10} columns={10} /> */}
  </div>
);

export default App;
