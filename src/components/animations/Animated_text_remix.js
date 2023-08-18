import React, { useEffect } from "react";

const FallingTextComponent = () => {
  const handleHover = (index, direction) => {
    const element = document.getElementById(`chunk-${index}`);
    // const element2 = document.getElementById(`chunks2-${index}`);

    if (element) {
      if (direction === "left") {
        element.style.transform = "translateX(-500px)";
      } else if (direction === "right") {
        element.style.transform = "translateX(500px)";
      }
    }
  };

  // useEffect(() => {
  //   const chunks = document.querySelectorAll(".chunk");

  //   chunks.forEach((chunk, index) => {
  //     if (index % 2 === 0) {
  //       chunk.addEventListener("mouseenter", () => handleHover(index, "left"));
  //     } else {
  //       chunk.addEventListener("mouseenter", () => handleHover(index, "right"));
  //     }
  //   });

  //   return () => {
  //     chunks.forEach((chunk, index) => {
  //       chunk.removeEventListener("mouseenter", () =>
  //         handleHover(index, "left")
  //       );
  //       chunk.removeEventListener("mouseleave", () =>
  //         handleHover(index, "right")
  //       );
  //     });
  //   };
  // }, []);

  useEffect(() => {
    const chunks1 = document.querySelectorAll(".chunk");
    const chunks2 = document.querySelectorAll(".chunks2");

    chunks1.forEach((chunk, index) => {
      chunk.addEventListener("mouseenter", () => handleHover(index, "left"));
    });

    chunks2.forEach((chunk, index) => {
      chunk.addEventListener("mouseenter", () => handleHover(index, "right"));
    });

    return () => {
      chunks1.forEach((chunk, index) => {
        chunk.removeEventListener("mouseenter", () =>
          handleHover(index, "left")
        );
      });

      chunks2.forEach((chunk, index) => {
        chunk.removeEventListener("mouseenter", () =>
          handleHover(index, "right")
        );
      });
    };
  }, []);

  const text =
    "Nulla ut nisi vitae augue malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.Nulla ut nisi vitae augue ultrices malesuada. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo. Sed efficitur lectus nec facilisis commodo.";

  const words = text.split(" ");
  const chunks1 = [];
  const chunks2 = [];
  for (let i = 0; i < words.length; i += 4) {
    chunks1.push(words.slice(i, i + 2).join(" "));
    chunks2.push(words.slice(i + 2, i + 4).join(" "));
  }

  return (
    <div>
      {chunks1.map((chunk, index) => (
        <React.Fragment key={index}>
          <span
            id={`chunk-${index}`}
            className={`chunk chunk-${index}`}
            style={{
              color: "white",
              display: "inline-block",
              opacity: 1,
              transition: "transform 0.5s",
            }}
          >
            {chunk}{" "}
          </span>
          <span
            className={`chunks2-${index}`}
            style={{
              color: "white",
              opacity: 1,
              display: "inline-block",
              transition: "transform 0.35s",
            }}
          >
            {index < chunks2.length && chunks2[index]}{" "}
          </span>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default FallingTextComponent;
