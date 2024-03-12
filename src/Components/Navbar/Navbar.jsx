import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import person_1 from '../../assets/Images/person_1.jpg'
import { MdNotificationsPaused } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { PiMoonFill } from "react-icons/pi";
import { MdWbSunny } from "react-icons/md";
const Navbar = () => {

  const [theme, setTheme] = useState("system");
  const options = [
    {
      icon: "sunny",
      text: "white",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop",
      text: "system",
    }
  ]

  return (
    <div className='bg-malachite-50 dark:bg-[#273746] w-full mt-5 px-4'>
      <div className='flex w-full justify-between items-center'>
        <div className='text-[#475569] font-semibold'>Home</div>
        <div>
            <div className='flex items-center justify-center px-3 text-lg  rounded-full text-[#475569]  md:w-80 bg-white dark:bg-[#273746]'>
                <div><IoIosSearch /></div>
                <input type="text" className='bg-transparent px-2 py-2 w-28 md:w-auto focus:outline-none' placeholder="Search"/>
            </div>
        </div>
        <div className='flex gap-2 items-center'>
            <div className='hidden md:flex'>
                <div className='flex items-center justify-center text-[#475569] bg-white dark:bg-dark w-10 h-10 rounded-full'>
                    <div><HiOutlineMail /></div>
                </div>
            </div>
            <div className='hidden md:flex'>
                <div className='flex items-center justify-center text-[#475569] bg-white dark:bg-dark w-10 h-10 rounded-full'>
                <div><MdNotificationsPaused /></div>
                </div>
            </div>
            <div>
                <div className='bg-white w-10 h-10 rounded-full'>
                    <img src={person_1} className='rounded-full'/>
                </div>
            </div>
            <div className=' flex gap-2 font-semibold bg-dark p-1 rounded-md text-[#475569] text-3xl'>
                <button><PiMoonFill/></button>
                <button><MdWbSunny /></button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
