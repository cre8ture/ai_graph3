"use client";
import { useState } from "react";
import Index from "../index/Reg2";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="flex items-center justify-between px-4 py-6">
      <div className="text-xl font-bold"></div>

      <div
        // className="text-3xl cursor-pointercursor-pointer transform transition duration-500 hover:rotate-90"
        className="text-3xl cursor-pointercursor-pointer transform transition duration-500 hover:scale(1.1)"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </div>

      {showMenu && (
        // <div className="fixed right-0 top-0 h-full w-2/3 bg-gray-900"></div>
        <div>
          <Index />
        </div>
      )}
    </nav>
  );
}
