import React from "react";

const DataTable = ({ data }) => {
  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className="data-row hover:bg-gray-100 transform hover:scale-110"
          >
            <td className="border px-4 py-2">{item.name}</td>
            <td className="border px-4 py-2">{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
