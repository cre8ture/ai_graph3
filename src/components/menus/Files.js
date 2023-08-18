import React, { useState } from "react";

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="dropdown inline-block relative">
      <button
        className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
        onClick={toggleDropdown}
      >
        <span>Dropdown ?</span>
      </button>
      <ul
        className={`dropdown-content absolute text-gray-700 pt-1 ${
          isDropdownOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <div className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
            Option 1
          </div>
        </li>
        <li>
          <div className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
            Option 2
          </div>
        </li>
        <li className="dropdown">
          <div className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
            Option 3 ?
          </div>
          <ul
            className={`dropdown-content absolute text-gray-700 pl-5 ml-24 ${
              isDropdownOpen ? "-mt-10" : "-mt-20"
            } ${isDropdownOpen ? "block" : "hidden"}`}
          >
            <li>
              <div className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                Option 3-1
              </div>
            </li>
            <li>
              <div className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                Option 3-2
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
            Option 4
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
