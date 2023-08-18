import React, { useState, useEffect } from "react";
import AnimatedText from "../animations/Animated_text_final";
// import Text2 from "../animations/Animated_text";

// import Text from "../animations/Test_Animated";

import Table from "../tables/Table_scroll";

const AnimatedComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        top: isVisible ? "0" : "-100vh", // Starts offscreen
        left: "0",
        width: "100vw",
        height: isVisible ? "100vh" : "0", // Expands to full height
        background: "black",
        transition: "top 1s, height 1s",
      }}
    >
      <AnimatedText />
      {/* <Table /> */}
      <br />
      {/* <Text /> */}
      <Table />
    </div>
  );
};

export default AnimatedComponent;
