import React, { useRef, useEffect } from "react";

const ImageBreakerCanvas = ({ src, rows, columns }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = src;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    // const handleScroll = () => {
    //   const scrollY = window.scrollY;
    //   const scrollX = window.scroll;

    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   const cellWidth = canvas.width / columns;
    //   const cellHeight = canvas.height / rows;
    //   for (let row = 0; row < rows; row++) {
    //     for (let col = 0; col < columns; col++) {
    //       const x = col * cellWidth;
    //       const y = row * cellHeight;
    //       ctx.drawImage(
    //         img,
    //         x,
    //         y,
    //         cellWidth,
    //         cellHeight,
    //         x + col * (scrollY / 10),
    //         y + row * (scrollY / 10),
    //         cellWidth,
    //         cellHeight
    //       );
    //     }
    //   }
    // };
    // const handleScroll = () => {
    //   const scrollY = window.scrollY;
    //   const maxScroll = 100; // Maximum scroll threshold for the breaking effect
    //   const offset = scrollY > maxScroll ? scrollY - maxScroll : 0; // Calculate the offset

    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   const cellWidth = canvas.width / columns;
    //   const cellHeight = canvas.height / rows;

    //   for (let row = 0; row < rows; row++) {
    //     for (let col = 0; col < columns; col++) {
    //       const x = col * cellWidth;
    //       const y = row * cellHeight;

    //       if (offset === 0) {
    //         // If no offset, draw the original image
    //         ctx.drawImage(
    //           img,
    //           x,
    //           y,
    //           cellWidth,
    //           cellHeight,
    //           x,
    //           y,
    //           cellWidth,
    //           cellHeight
    //         );
    //       } else {
    //         // Apply the offset to the breaking effect
    //         ctx.drawImage(
    //           img,
    //           x,
    //           y,
    //           cellWidth,
    //           cellHeight,
    //           x + col * (offset / 10),
    //           y + row * (offset / 10),
    //           cellWidth,
    //           cellHeight
    //         );
    //       }
    //     }
    //   }
    // };
    const handleScroll = () => {
      const scrollY = window.scrollY;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cellWidth = canvas.width / columns; // Declare and initialize cellWidth
      const cellHeight = canvas.height / rows;
      const maxScroll = 100; // Maximum scroll threshold for the breaking effect
      const offset = scrollY > maxScroll ? scrollY - maxScroll : 0; // Calculate the offset
      if (offset === 0) {
        // If no offset, draw entire image at once
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      } else {
        // Otherwise, draw image with offsets
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < columns; col++) {
            const x = col * cellWidth;
            const y = row * cellHeight;
            ctx.drawImage(
              img,
              x,
              y,
              cellWidth,
              cellHeight,
              x + col * (offset / 10),
              y + row * (offset / 10),
              cellWidth,
              cellHeight
            );
          }
        }
      }
    };

    // // WILL BRING BACK ORIGINAL IMAGE
    // const handleScroll = () => {
    //   const scrollY = window.scrollY;
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   const cellWidth = canvas.width / columns;
    //   const cellHeight = canvas.height / rows;
    //   if (scrollY < 100) {
    //     // If scroll position is below threshold, draw entire image at once
    //     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    //   } else {
    //     // Otherwise, draw image with offsets
    //     for (let row = 0; row < rows; row++) {
    //       for (let col = 0; col < columns; col++) {
    //         const x = col * cellWidth;
    //         const y = row * cellHeight;
    //         ctx.drawImage(
    //           img,
    //           x,
    //           y,
    //           cellWidth,
    //           cellHeight,
    //           x + col * (scrollY / 10),
    //           y + row * (scrollY / 10),
    //           cellWidth,
    //           cellHeight
    //         );
    //       }
    //     }
    //   }
    // };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [src, rows, columns]);

  return <canvas ref={canvasRef} width={500} height={500} />;
};

export default ImageBreakerCanvas;
