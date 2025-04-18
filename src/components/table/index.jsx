import { useState } from "react";

export const FilterableTable = ({ data, columns, title = 'Cədvəl', extraFilter }) => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const filteredData = data.filter((item) =>
    columns.every((col) => {
      const filterValue = filters[col.accessor] || '';
      return filterValue === ''
        ? true
        : item[col.accessor]
            ?.toString()
            .toLowerCase()
            .includes(filterValue.toLowerCase());
    })
  );

  return (
    <div className="container mx-auto flex flex-col gap-4 py-2 px-40 mt-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        {extraFilter && extraFilter({ filters, handleFilterChange })}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-t border-gray-300">
          <thead>
            <tr className="border-b font-semibold text-gray-800">
              {columns.map((col) => (
                <th key={col.accessor} className="px-3 py-2">
                  {col.label}
                </th>
              ))}
            </tr>
            <tr className="border-b text-gray-500">
              {columns.map((col) => (
                <th key={col.accessor} className="px-3 py-2">
                  <input
                    type="text"
                    className="w-full bg-gray-100 rounded px-2 py-1"
                    value={filters[col.accessor] || ''}
                    onChange={(e) =>
                      handleFilterChange(col.accessor, e.target.value)
                    }
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                {columns.map((col) => (
                  <td key={col.accessor} className="px-3 py-2">
                    {row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {filteredData.length === 0 && (
          <p className="mt-4 text-sm text-gray-500">Uyğun nəticə tapılmadı.</p>
        )}
      </div>
    </div>
  );
};
