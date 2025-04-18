import React from 'react'
import { FilterableTable } from '../table';
import { Calendar, Filter } from 'lucide-react';

const ClientsTable = () => {
    const data = [
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
          mekan: 'Khan',
          musteri: 'Əli Məmmədov',
          telefon: '+994(55) 777-73-49',
          mebleg: 85.5,
          endirim: 'Gold 9%',
          tarix: '2024-12-16 14:30',
        },
        {
          id: 3,
          mekan: 'Khan',
          musteri: 'Əli Məmmədov',
          telefon: '+994(55) 777-73-49',
          mebleg: 85.5,
          endirim: 'Gold 9%',
          tarix: '2024-12-16 14:30',
        },
        {
          id: 4,
          mekan: 'Khan',
          musteri: 'Əli Məmmədov',
          telefon: '+994(55) 777-73-49',
          mebleg: 85.5,
          endirim: 'Gold 9%',
          tarix: '2024-12-16 14:30',
        },
      ];
      
      const columns = [
        { label: 'ID', accessor: 'id' },
        { label: 'Xərclənən', accessor: 'mekan' },
        { label: 'Endirim', accessor: 'musteri' },
        { label: 'Tarixi', accessor: 'telefon' }
      ];
  return (
    <div className='w-full '>
        <FilterableTable data={data} columns={columns} title='Müştərilər'
         extraFilter={({ filters, handleFilterChange }) => (
            <div className="flex items-center border rounded px-2 py-1 gap-2 ">
              <Filter className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="search by date"
                className="outline-none w-full text-sm"
                value={filters['tarix'] || ''}
                onChange={(e) => handleFilterChange('tarix', e.target.value)}
              />
              <Calendar className="w-4 h-4 text-gray-500" />
            </div>
          )}
        />
    </div>
  )
}

export default ClientsTable