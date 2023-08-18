import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center">
      <p className="text-center">
        © Kai Kleinbard |{" "}
        <a
          href="mailto:bakukai@gmail.com"
          className="text-blue-500 hover:scale-110 transform transition duration-300"
        >
          Get in touch
        </a>
      </p>
    </footer>
  );
};

export default Footer;
