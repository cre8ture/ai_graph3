import React, { useState, useEffect } from "react";
import AnimatedText from "../animations/Animated_text_final";
// import Text2 from "../animations/Animated_text";
import Typing from "../typing/Typing";
import { mission } from "../writing/mission";
import Bio from "../../components/cards/Bio.js";
import Footer from "../footer/Footer";
// import Text from "../animations/Test_Animated";

import Table from "../tables/Table_scroll";

const textToType =
  "Hello, I'm Kai Kleinbard, a software developer, AI specialist, and educator.";

const workingOn = "Projects and Current Research";

const AnimatedComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mission_array = mission.split("\n");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Typing textToType={textToType} /> */}
      <div
        style={{
          position: "relative",

          left: "0",
          margin: "auto", // Corrected 'margins' to 'margin'
          width: "100vw",
          marginLeft: "10px",
          background: "black",
          fontFamily: "monospace", // Add monospace font
          fontSize: "30px", // Set font size to 20
          lineHeight: "1.5", // Add space beneath each line
          padding: "10px", // Add padding for additional space between text and border
        }}
      >
        <AnimatedText text={textToType} />
      </div>
      <br />
      <Bio />
      <br />
      <div
        style={{
          position: "relative",

          left: "0",
          margin: "auto", // Corrected 'margins' to 'margin'
          width: "100vw",
          marginLeft: "10px",
          background: "black",
          fontFamily: "monospace", // Add monospace font
          fontSize: "30px", // Set font size to 20
          lineHeight: "1.5", // Add space beneath each line
          padding: "10px", // Add padding for additional space between text and border
        }}
      >
        <AnimatedText text={workingOn} />
      </div>
      <div
        style={{
          position: "relative",
          // top: i sVisible ? "0" : "-100vh", // Starts offscreen
          left: "0",
          marginLeft: "100px",
          // margin: "auto", // Corrected 'margins' to 'margin'
          width: "100vw",
          // height: isVisible ? "100vh" : "0", // Expands to full height
          background: "black",
          // transition: "top 1s, height 1s",
          fontFamily: "monospace", // Add monospace font
          fontSize: "25px", // Set font size to 20
          lineHeight: "1.5", // Add space beneath each line
          padding: "10px", // Add padding for additional space between text and border
        }}
      >
        {mission_array.map((paragraph, index) => (
          <React.Fragment key={index}>
            <AnimatedText text={paragraph} />
          </React.Fragment>
        ))}
        <br />
        <Table />
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default AnimatedComponent;
