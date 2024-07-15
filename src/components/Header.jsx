import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  return ( 
  <header className='p-4 flex justify-between items-center'>
    <Link to={"/"} className='flex gap-2 items-center'>
    <img className='w-[50px]' src="/youtube.png" alt="logo" />
    <h1 className='text-2xl max-sm:hidden font-mono'>Youtube</h1>
    </Link>
    <form className='group flex border border-gray-400 rounded-[20px] overflow-hidden'>
        <input 
        className=' group-hover:border-blue-500 bg-black border border-transparent
        px-5 py-2 outline-none rounded-l-[20px] focus:border-blue-500' 
        type='text' 
        placeholder='Ara...'
        />
        <button className='border-l px-4 bg-zinc-800 text-2xl'>
            <IoSearch/>
            
        </button>
    </form>
    <div className='flex gap-3 text-xl cursor-pointer'>
        <FaBell className=' hover:text-gray-400 duration-150-[250ms]'/>
        <IoIosVideocam className=' hover:text-gray-400 duration-150-[250ms]'/>
        <MdVideoLibrary className=' hover:text-gray-400 duration-150-[250ms]'/>
    </div>
  </header>
    
  )
}

export default Header
