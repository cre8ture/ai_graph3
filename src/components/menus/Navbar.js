"use client";
import Link from "next/link";
import { useState, useRef, Suspense, useEffect } from "react";
// import { useRouter } from "next/navigation"; // "next/router";

// https://nextjs.org/docs/app/api-reference/functions/use-router
import { NavigationEvents } from "./navigation-events";
import MenuButton from "./MenuButton";

// import Index from "../index/Reg2";
import Tootltip from "../tooltips/Tooltips";

import New_Screenshot_Button from "../utils/NewAndScreenshot";
import { Familjen_Grotesk } from "next/font/google";
import Files from "./Files";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isGraph, setIsGraph] = useState(true);
  const [url, setUrl] = useState("");
  const [linkText, setLinkText] = useState("graph");
  // const router = useRouter();

  // Create a ref for the menu element
  const menuRef = useRef(null);
  useEffect(() => {
    if (url.includes("graph")) {
      setIsGraph(true);
      setLinkText("table");
    } else {
      setIsGraph(false);
      setLinkText("graph");
    }
  }, [url]);

  function toggleMenu() {
    // setShowMenu((prevShowMenu) => !prevShowMenu);
    setShowMenu(false);
    console.log("showMenu", !showMenu);
  }
  // Close the menu when clicking outside
  useEffect(() => {
    function handleClick(event) {
      if (
        showMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [showMenu]);

  function toggleMenu() {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  }

  // useEffect(() => {}, [showMenu]);

  return (
    <nav className="flex items-center justify-between px-4 py-6">
      <New_Screenshot_Button />{" "}
      <div
        // className="flex justify-end text-3xl font-mono cursor-pointer transform transition duration-500 hover:rotate-90"
        className="flex justify-end text-3xl font-mono cursor-pointer transform transition duration-500 hover:scale-110"
      >
        <MenuButton toggleMenu={toggleMenu} />
      </div>
      <div
        ref={menuRef}
        className={`${
          showMenu ? "translate-x-0" : "translate-x-full"
        } fixed right-0 top-5 h-1/2 w-1/2 bg-red-400 transition-transform duration-500 ease-in-out`}
        style={{ zIndex: 99999 }}
      >
        {showMenu && (
          <div
            ref={menuRef}
            className="slideOut fixed right-0 top-5 h-1/2 w-1/2 bg-red-400 transitio duration-500 ease-in-out transform"
            style={{ zIndex: 99999 }}
          >
            <ul className="text-lavendar text-center text-xl">
              <li className="py-4">
                <Link href="/">
                  <div className="hover:bg-purple-300 px-4 py-2 rounded">
                    Login
                  </div>
                </Link>
              </li>
              <li className="py-4">
                <Link href="/about">
                  <div className="hover:bg-purple-300 px-4 py-2 rounded">
                    <Files />
                  </div>
                </Link>
              </li>
              <li className="py-4">
                <Link href="/contact">
                  <div className="hover:bg-purple-300 px-4 py-2 rounded">
                    Contact
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
