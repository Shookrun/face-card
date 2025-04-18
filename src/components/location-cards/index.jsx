import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaStore } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

const LocationCards = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const mockData = [
    {
      id: 1,
      img: "/khan.png",
      percentage: 7,
      price: 128,
      totalsales: "15,425.50",
      activeusers: "1,245",
      averagescore: "68.50",
      bg:"#2F2F2F"
    },
    {
      id: 2,
      img: "/sketchcafe.png",
      percentage: 7,
      price: 128,
      totalsales: "15,425.50",
      activeusers: "1,245",
      averagescore: "68.50",
      bg:"#EBEBEB"
    },
    {
      id: 3,
      img: "/facecistka.png",
      percentage: 7,
      price: 128,
      totalsales: "15,425.50",
      activeusers: "1,245",
      averagescore: "68.50",
      bg:"#D0D0D0"
    },
    {
      id: 4,
      img: "/facestudio.png",
      percentage: 7,
      price: 128,
      totalsales: "15,425.50",
      activeusers: "1,245",
      averagescore: "68.50",
      bg:"#8E1221"
    },
    {
      id: 5,
      img: "/facecom.png",
      percentage: 7,
      price: 128,
      totalsales: "15,425.50",
      activeusers: "1,245",
      averagescore: "68.50",
      bg:"#FFB700"
    },
    {
      id: 6,
      img: "/facecom.png",
      percentage: 7,
      price: 128,
      totalsales: "15,425.50",
      activeusers: "1,245",
      averagescore: "68.50",
      bg:"#00000000"
    },
  ];
  return (
    <div className="container mx-auto flex flex-col gap-4 py-2 px-40">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold">Məkanlar</h2>
        <div className="flex items-center gap-4">
          <div className="flex  items-center border rounded-md px-4 py-2 shadow-sm  space-x-4 bg-white">
            <div className="flex  items-center divide-x">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="from"
                className="outline-none border-r px-2 py-1 text-sm placeholder-gray-500 w-24"
              />

              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="to"
                className="outline-none px-2 py-1 text-sm placeholder-gray-500 w-24"
              />
            </div>
            <div className="flex items-center space-x-2">
              <FiCalendar className="w-5 h-5 text-gray-700" />
            </div>
          </div>
          <FaStore className="w-5 h-5 text-red-600" />
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-4 justify-between text-white">
        {mockData.map(({ img, id, percentage, price, totalsales, activeusers, averagescore, bg }) => {
  const textColor = (id === 1 || id === 4) ? 'text-white' : 'text-black';

  return (
    <div
      key={id}
      style={{ backgroundColor: bg }}
      className={`flex shadow-2xs p-5 rounded-xl ${textColor}`}
    >
      <div className="flex flex-col gap-2 justify-between  w-[25%]">
        <img src={img} className="w-[100px]" alt="" />
        <p>{percentage}%</p>
        <p className="text-3xl">{price} ₼</p>
      </div>
      <div className="flex flex-col justify-between w-[25%]">
        <h2 className="text-3xl">Ümumi Satışlar</h2>
        <p>Bu gün</p>
        <p className="text-2xl">{totalsales} ₼</p>
      </div>
      <div className="flex flex-col justify-between w-[25%]">
        <h2 className="text-3xl">Aktiv istifadəçilər</h2>
        <p>Son 30 gün</p>
        <p className="text-2xl">{activeusers}</p>
      </div>
      <div className="flex flex-col justify-between w-[25%]">
        <h2 className="text-3xl">Orta çek</h2>
        <p>Bu ay</p>
        <p className="text-2xl">{averagescore} ₼</p>
      </div>
    </div>
  );
})}

        </div>
      </div>
    </div>
  );
};

export default LocationCards;
