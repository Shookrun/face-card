import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-[#191919] flex justify-between container mx-auto  items-center py-2 px-40'>
      <img src="/logo.svg" alt="" />
      <div className='flex items-center text-[#FFFFFF] gap-8 font-bold'>
        <Link>Dashboard</Link>
        <Link>Əməliyyatlar</Link>
        <Link>Müştərilər</Link>
      </div>
      <FaUserAlt className='text-white'/>
    </div>
  )
}

export default Navbar