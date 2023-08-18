import React, { useState, useEffect } from "react";
import { edtech_nodes2 } from "../graph/data/edtech";
import { mindfulness_nodes } from "../graph/data/mindfulness";
import { deep_learning_nodes } from "../graph/data/ai";
import { llms_nodes } from "../graph/data/llms";
import { creative_nodes } from "../graph/data/creative";

import Link from "next/link";

const DownChevron = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-4 h-4 ml-2 inline-block align-middle"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const UpChevron = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-4 h-4 ml-2 inline-block align-middle"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 15.75l7.5-7.5 7.5 7.5"
    />
  </svg>
);

export default function InitiateTable() {
  const allDat = [
    edtech_nodes2,
    mindfulness_nodes,
    deep_learning_nodes,
    llms_nodes,
    creative_nodes,
  ];
  var data = [];
  for (let j = 0; j < allDat.length; j++) {
    for (let i = 1; i < allDat[j].length; i++) {
      var item = allDat[j][i].data;
      item.category = allDat[j][0].data.title;
      data.push(item);
    }
  }

  return (
    <div>
      <DataTable data={data} />
    </div>
  );
}

const DataTable = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const handleScroll = () => {
      const tableElement = document.querySelector(".data-table");

      if (tableElement) {
        const elementTop = tableElement.getBoundingClientRect().top;
        const elementBottom = tableElement.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight && elementBottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRowClick = (link) => {
    window.open(link, "_blank");
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Ed Tech":
        return "bg-blue-400";
      case "Mindfulness":
        return "bg-lime-500";
      case "Deep Learning":
        return "bg-pink-500";
      case "Other":
        return "bg-purple-500";
      case "Large Language Models":
        return "bg-cyan-500";
      default:
        return "bg-gray-500";
    }
  };

  let sortedData = data;
  if (sortColumn) {
    sortedData = data.slice().sort((a, b) => {
      const valueA = a[sortColumn];
      const valueB = b[sortColumn];
      if (valueA < valueB) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
  }

  const getChevronIcon = (column) => {
    if (sortColumn === column) {
      return sortOrder === "asc" ? <UpChevron /> : <DownChevron />;
    }
    return <DownChevron />;
  };

  return (
    <div className="p-5">
      <table className="w-full text-left data-table">
        <thead>
          <tr>
            <th
              className="px-1 py-2 cursor-pointer"
              onClick={() => handleSort("title")}
            >
              Name {getChevronIcon("title")}
            </th>
            <th
              className="px-1 py-2 cursor-pointer"
              onClick={() => handleSort("description")}
            >
              Description {getChevronIcon("description")}
            </th>
            <th
              className="px-1 py-2 cursor-pointer"
              onClick={() => handleSort("category")}
            >
              Type {getChevronIcon("category")}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr
              key={index}
              className={`data-row hover:bg-blue-800 transform hover:scale-110 ${
                isVisible ? "slide-in" : "slide-out"
              }`}
              style={{
                transition: `transform 0.5s ease-out ${index * 0.1}s`,
                transform: isVisible ? "translateX(0)" : "translateX(-100%)",
                cursor: "pointer",
              }}
              onClick={() => handleRowClick(item.link)}
            >
              <td className="border px-4 py-2">
                <Link href={item.link}>{item.title}</Link>
              </td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2">
                <div
                  // className={`inline-block rounded-full text-white p-1 py-2 text-xs font-bold ${getCategoryColor(
                  className={`inline-block text-white p-1 py-2 text-xs font-bold ${getCategoryColor(
                    item.category
                  )}`}
                >
                  {item.category}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
