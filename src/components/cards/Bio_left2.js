import React, { useState, useEffect } from "react";
import AnimatedText from "../animations/anim_8_1/Load_Anim";
import { bio } from "../writing/bio";

const name = "Kai Kleinbard";
const AnimatedComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bio_array = bio.split("\n");

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
      {/* <div
        style={{
          position: "relative",
          left: "0",
          margin: "auto",
          width: "70%",
          background: "black",
          fontFamily: "monospace",
          fontSize: "30px",
          lineHeight: "1.5",
          wordWrap: "break-word", // Add word-wrap property
        }}
      >
        <AnimatedText text={name} />
      </div> */}
      <br />
      <div
        style={{
          position: "relative",
          left: "0",
          margin: "auto",
          width: "70%",
          background: "black",
          fontFamily: "monospace",
          fontSize: "25px",
          lineHeight: "1.5",
          paddingRight: "10px",
          wordWrap: "break-word", // Add word-wrap property
        }}
      >
        {bio_array.map((paragraph, index) => (
          <React.Fragment key={index}>
            <AnimatedText text={paragraph} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AnimatedComponent;
