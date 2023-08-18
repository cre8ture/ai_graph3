import React, { useState } from 'react';

const SortableTable = () => {
  const [sortConfig, setSortConfig] = useState({ column: null, direction: 'asc' });

  const sortTable = (column) => {
    let direction = 'asc';
    if (sortConfig.column === column && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ column, direction });
  };

  const { column, direction } = sortConfig;

  const tableData = [
    { name: 'John Doe', description: 'Lorem ipsum dolor sit amet', link: 'https://example.com' },
    { name: 'Jane Smith', description: 'Consectetur adipiscing elit', link: 'https://example.com' },
    { name: 'Mike Johnson', description: 'Sed do eiusmod tempor incididunt', link: 'https://example.com' },
    // Add more data as needed
  ];

  const sortedData = [...tableData].sort((a, b) => {
    if (column !== null) {
      if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <table className="w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th onClick={() => sortTable(0)} className="sortable px-4 py-2 bg-gray-200">
            Names {column === 0 && <span>{direction === 'asc' ? '▲' : '▼'}</span>}
          </th>
          <th onClick={() => sortTable(1)} className="sortable px-4 py-2 bg-gray-200">
            Description {column === 1 && <span>{direction === 'asc' ? '▲' : '▼'}</span>}
          </th>
          <th onClick={() => sortTable(2)} className="sortable px-4 py-2 bg-gray-200">
            Link {column === 2 && <span>{direction === 'asc' ? '▲' : '▼'}</span>}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={index}>
            <td className="px-4 py-2">{row.name}</td>
            <td className="px-4 py-2">{row.description}</td>
            <td className="px-4 py-2">
              <a href={row.link}>Example Link</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SortableTable;
