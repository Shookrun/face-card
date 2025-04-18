import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FilterableTable } from '../table';
import { Calendar, Filter } from 'lucide-react';
import ClientsTable from '../clients-table';



const statsData = [
    { month: 'JUL', value: 956 },
    { month: 'AUG', value: 204 },
    { month: 'SEP', value: 224 },
    { month: 'OCT', value: 203 },
    { month: 'NOV', value: 284 },
    { month: 'DEC', value: 239 },
  ];

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
    { label: 'Məkan', accessor: 'mekan' },
    { label: 'Müştəri', accessor: 'musteri' },
    { label: 'Telefon', accessor: 'telefon' },
    { label: 'Məbləğ, ₼', accessor: 'mebleg' },
    { label: 'Endirim', accessor: 'endirim' },
    { label: 'Tarix', accessor: 'tarix' },
  ];
  
const ClientDashboard = () => {
    const uptoplatinum = 739
    const fundsspent = 2984
    const maxValue = Math.max(...statsData.map(d => d.value));

  return (
   <div>
     <div className='container mx-auto flex flex-col gap-4  py-2 px-40'>
        <h2 className='text-3xl font-bold'>Yuriy Kovalchuk</h2>
        <div className='flex items-center justify-between'>
        <div className='bg-[#F4F4F4] w-[30%] flex flex-col h-[200px] justify-center  p-4 rounded-lg'>
            <h2 className='text-lg font-bold'>Səviyyə</h2>
            <p>Platinuma qalıq:{uptoplatinum} ₼</p>
            <div className='flex items-center gap-4'>
                <h2 className='text-[#DFA100] text-3xl font-bold'>Gold</h2>
                <IoIosArrowForward className='text-[#5B5B5B] text-xl'/>
                <h2 className='text-[#817D75] text-3xl font-bold'>Platinum</h2>
            </div>
        </div>
        <div className='bg-[#F4F4F4] ml-6 w-[30%] flex flex-col h-[200px] justify-center  p-4 rounded-lg'>
            <h2 className='text-lg font-bold'>Xərclənən vəsait</h2>
            <p>Son 30 gün:1.2%</p>
           <h2 className='text-3xl'>{fundsspent}₼</h2>
        </div>
        <div className="bg-gray-100 p-2 rounded-xl w-fit mx-auto">
      <div className="flex gap-6 items-end ">
        {statsData.map((item, index) => {
          const percentage = item.value / maxValue;
          const barHeight = percentage * 140;

          const redOpacity = 0.3 + (percentage * 0.7);
          const barColor = `rgba(255, 0, 0, ${redOpacity})`;

          return (
            <div key={index} className="flex flex-col items-center justify-end">
              <span className="text-sm font-semibold mb-1">{item.value}<sup className="text-xs">m</sup></span>
              <div
                className="w-6 rounded-t"
                style={{
                  height: `${barHeight}px`,
                  backgroundColor: barColor,
                }}
              ></div>
              <span className="mt-2 text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full font-medium">
                {item.month}
              </span>
            </div>
          );
        })}
      </div>
    </div>
        </div>
    </div>
    <ClientsTable/>
   </div>
  )
}

export default ClientDashboard