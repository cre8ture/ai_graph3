

import React, { useState } from "react";

const ScaledInput = ({ setIsHovered, setInputText}) => {
  const [padding, setPadding] = useState("p-3");

  const handleMouseEnter = () => {
    setPadding("p-5");
    setIsHovered(true);
  };

  const handleMouseLeave = (event) => {
    setPadding("p-2");
    if (!event.target.value) {
      // If the input has a value, call setIsHovered with true
      setIsHovered(false);
    }
  };

  const handleChange = (event) => {
    // Check if the input has a value
    if (event.target.value) {

      setInputText(event.target.value)
      // If the input has a value, call setIsHovered with true
      setIsHovered(true);
    } else {
      // If the input is empty, call setIsHovered with false
      setIsHovered(false);
    }
  };

  return (
    <input
      className={`rounded-lg mt-3 ml-3 shadow-md transition-all duration-1000 transform hover:scale-120 focus:scale-120 ${padding}`}
      type="text"
      placeholder="Ask me anything"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onChange={handleChange}
    />
  );
};

export default ScaledInput;
