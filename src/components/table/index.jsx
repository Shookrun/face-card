import React, { useState } from 'react';
import { Calendar, Filter } from 'lucide-react';

const initialData = [
  {
    id: 1,
    mekan: 'Khan',
    musteri: 'Əli Məmmədov',
    telefon: '+994(55) 777-73-49',
    mebleg: 85.5,
    endirim: 'Gold 9%',
    tarix: '2024-12-16 14:30',
  },
  {
    id: 2,
    mekan: 'Facestudio',
    musteri: 'Leyla Əliyeva',
    telefon: '+994(55) 777-73-49',
    mebleg: 120,
    endirim: 'Silver 6%',
    tarix: '2023-12-16 12:15',
  },
  {
    id: 3,
    mekan: 'Facecom',
    musteri: 'Murad Həsənov',
    telefon: '+994(55) 777-73-49',
    mebleg: 450.75,
    endirim: 'Platinum 15%',
    tarix: '2024-12-16 10:45',
  },
  {
    id: 4,
    mekan: 'Sketchcafe',
    musteri: 'Ayla Babayeva',
    telefon: '+994(55) 777-73-49',
    mebleg: 250.5,
    endirim: 'Bronze 3%',
    tarix: '2024-12-16 09:53',
  },
];

const Table = () => {
  const [filters, setFilters] = useState({
    id: '',
    mekan: '',
    musteri: '',
    telefon: '',
    mebleg: '',
    endirim: '',
    tarix: '',
  });

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const filteredData = initialData.filter((item) =>
    Object.keys(filters).every((key) =>
      filters[key] === ''
        ? true
        : item[key].toString().toLowerCase().includes(filters[key].toLowerCase())
    )
  );

  return (
    <div className="container mx-auto flex flex-col gap-4  py-2 px-40 mt-10">
      {/* Title & Search */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Son əməliyyatlar</h1>
        <div className="flex items-center border rounded px-2 py-1 gap-2 w-[200px]">
          <Filter className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="search by date"
            className="outline-none w-full text-sm"
            onChange={(e) => handleFilterChange('tarix', e.target.value)}
          />
          <Calendar className="w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-t border-gray-300">
          <thead>
            <tr className="border-b font-semibold text-gray-800">
              <th className="px-3 py-2 w-16">ID</th>
              <th className="px-3 py-2">Məkan</th>
              <th className="px-3 py-2">Müştəri</th>
              <th className="px-3 py-2">Telefon</th>
              <th className="px-3 py-2">Məbləğ, ₼</th>
              <th className="px-3 py-2">Endirim</th>
              <th className="px-3 py-2">Tarix</th>
            </tr>
            <tr className="border-b text-gray-500">
              <th className="px-3 py-2">
                <input
                  type="text"
                  className="w-full bg-gray-100 rounded px-2 py-1"
                  value={filters.id}
                  onChange={(e) => handleFilterChange('id', e.target.value)}
                />
              </th>
              <th className="px-3 py-2">
                <input
                  type="text"
                  className="w-full bg-gray-100 rounded px-2 py-1"
                  value={filters.mekan}
                  onChange={(e) => handleFilterChange('mekan', e.target.value)}
                />
              </th>
              <th className="px-3 py-2">
                <input
                  type="text"
                  className="w-full bg-gray-100 rounded px-2 py-1"
                  value={filters.musteri}
                  onChange={(e) => handleFilterChange('musteri', e.target.value)}
                />
              </th>
              <th className="px-3 py-2">
                <input
                  type="text"
                  className="w-full bg-gray-100 rounded px-2 py-1"
                  value={filters.telefon}
                  onChange={(e) => handleFilterChange('telefon', e.target.value)}
                />
              </th>
              <th className="px-3 py-2">
                <input
                  type="text"
                  className="w-full bg-gray-100 rounded px-2 py-1"
                  value={filters.mebleg}
                  onChange={(e) => handleFilterChange('mebleg', e.target.value)}
                />
              </th>
              <th className="px-3 py-2">
                <input
                  type="text"
                  className="w-full bg-gray-100 rounded px-2 py-1"
                  value={filters.endirim}
                  onChange={(e) => handleFilterChange('endirim', e.target.value)}
                />
              </th>
              <th className="px-3 py-2">
                <input
                  type="text"
                  className="w-full bg-gray-100 rounded px-2 py-1"
                  value={filters.tarix}
                  onChange={(e) => handleFilterChange('tarix', e.target.value)}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-50">
                <td className="px-3 py-2">{row.id}</td>
                <td className="px-3 py-2">{row.mekan}</td>
                <td className="px-3 py-2">{row.musteri}</td>
                <td className="px-3 py-2">{row.telefon}</td>
                <td className="px-3 py-2">{row.mebleg}</td>
                <td className="px-3 py-2">{row.endirim}</td>
                <td className="px-3 py-2">{row.tarix}</td>
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

export default Table;
