import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";

const Navbar = ({handleLogout}) => {
  return (
    <div className='bg-[#191919] flex justify-between items-center  container mx-auto  py-2 px-40'>
      <img src="/logo.svg" alt="" />
      <div className='flex items-center text-[#FFFFFF] gap-8 font-bold'>
        <Link>Dashboard</Link>
        <Link>Əməliyyatlar</Link>
        <Link>Müştərilər</Link>
      </div>
      <button onClick={()=>handleLogout} className='bg-[#FF4D00] flex items-center gap-2 px-4 py-2 rounded-md'>
      <FaUserAlt className='text-white'/>
      </button>
    </div>
  )
}

export default Navbar