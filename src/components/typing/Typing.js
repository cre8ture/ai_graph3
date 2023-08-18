import React, { useState, useEffect } from "react";

const Typewriter = ({ textToType }) => {
  //   const textToType = "Hello, I'm Kai Kleinbard, a software developer, AI specialist, and educator.";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < textToType.length) {
      const typingDelay = 10; //Math.random() * 150 + 50; // Random typing speed
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + textToType[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, typingDelay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, textToType]);

  return (
    <div style={{ fontFamily: "monospace", fontSize: "30px", padding: "10px" }}>
      {displayText}
    </div>
  );
};

export default Typewriter;
