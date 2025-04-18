import React from 'react'

const Companies = () => {
    const companies = [
        {
          img: "/khan.png",
          percentage: "7%",
          amount: "128₼",
          bg: "bg-zinc-900",
          text: "text-white",
        },
        {
          img: "/sketchcafe.png",
          percentage: "5%",
          amount: "37₼",
          bg: "bg-zinc-100",
          text: "text-black",
        },
        {
          img: "/facecistka.png",
          percentage: "9%",
          amount: "78₼",
          bg: "bg-zinc-300",
          text: "text-black",
        },
        {
          img: "/facestudio.png",
          percentage: "10%",
          amount: "264₼",
          bg: "bg-red-900",
          text: "text-white",
        },
        {
          img: "/facecom.png",
          percentage: "8%",
          amount: "3.940₼",
          bg: "bg-yellow-500",
          text: "text-black",
        },
      ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
    {companies.map((c, idx) => (
      <div key={idx} className={`rounded p-4 shadow flex flex-col justify-between h-[180px] ${c.bg} ${c.text}`}>
        <img src={c.img} alt="" className='w-[72px]' />
        <div className='text-2xl'>
        <div className="text-xs">{c.percentage}</div>
        <div className="text-xl font-bold">{c.amount}</div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Companies