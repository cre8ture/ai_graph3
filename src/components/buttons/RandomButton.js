import React, { useState } from "react";

const RandomButton = () => {
  const [text, setText] = useState("Randomize Color");

  const handleClick = () => {
    // Generate a random number between 0 and 1
    const rand = Math.random();

    if (rand < 0.6) {
      // 60% chance to display "Randomize Color"
      setText("Randomize Color");
    } else {
      // 40% chance to display a random string of characters
      const chars = "+-*&%$#@!";
      let newText = "";
      for (let i = 0; i < text.length; i++) {
        newText += chars[Math.floor(Math.random() * chars.length)];
      }
      setText(newText);
    }
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default RandomButton;
