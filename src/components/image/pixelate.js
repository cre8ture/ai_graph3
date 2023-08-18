import React, { useState, useEffect } from "react";

const ImageBreaker = ({ src, rows, columns }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pieces = [];
  for (let row = 0; row < rows; row++) {
    // Iterate through rows first
    for (let col = 0; col < columns; col++) {
      // Then iterate through columns
      // pieces.push(
      //   <div
      //     key={`${row}-${col}`}
      //     style={{
      //       position: "absolute",
      //       top: `${(row * 100) / rows}%`,
      //       left: `${(col * 100) / columns}%`,
      //       width: `${100 / columns}%`,
      //       height: `${100 / rows}%`,
      //       backgroundImage: `url(${src})`,
      //       backgroundSize: `${columns * 100}% ${rows * 100}%`,
      //       backgroundPosition: `${col * (100 / columns)}% ${
      //         row * (100 / rows)
      //       }%`,
      //       transform: `translate(${col * (scrollY / 10)}px, ${
      //         row * (scrollY / 10)
      //       }px)`,

      //       border: "1px solid black",
      //     }}
      //   />
      // );
      pieces.push(
        <div
          key={`${row}-${col}`}
          style={{
            position: "absolute",
            top: `${(row * 100) / rows}%`,
            left: `${(col * 100) / columns}%`,
            width: `${100 / columns}%`,
            height: `${100 / rows}%`,
            backgroundImage: `url(${src})`,
            backgroundSize: `${columns * 100}% ${rows * 100}%`,
            backgroundPosition: `${col * (100 / columns)}% ${
              row * (100 / rows)
            }%`,
            transform: `translate(${col * (scrollY / 10)}px, ${
              row * (scrollY / 10)
            }px)`,
            opacity: scrollY > 500 ? 0 : 1,
            transition: "opacity 1s",
            border: "1px solid black",
          }}
        />
      );
    }
  }

  return (
    <div style={{ position: "relative", width: "100%", paddingBottom: "100%" }}>
      {pieces}
    </div>
  );
};

export default ImageBreaker;
