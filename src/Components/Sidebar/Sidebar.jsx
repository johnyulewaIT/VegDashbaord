import React from 'react';
import { FaBowlFood } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { RiMessage3Line } from "react-icons/ri";
import { MdHistoryEdu } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaMoneyBills } from "react-icons/fa6";
import { BiSolidHotel } from "react-icons/bi";
import { FaCar } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import category1 from '../../assets/Images/category1.png';
const Sidebar = () => {
  return (
    <div className='w-[10%] lg:w-[15%] h-screen bg-white dark:bg-dark p-4  text-[#475569]'>
      <div className='flex flex-col h-full justify-between'>
        <div className='flex flex-col gap-10 items-center justify-center '>
          <div className='font-bold text-2xl text-malachite-500 uppercase'>
            <div className='flex items-center gap-2'>
              <div className='hidden md:flex'>Food</div>
              <div><FaBowlFood /></div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
          <div className='flex gap-2 justify-center items-center md:justify-start md:items-center'>
            <div><AiFillHome /></div>
            <div className='hidden lg:flex'>Home</div>
          </div>
          <div className='flex gap-2 justify-center items-center md:justify-start md:items-center'>
            <div><FaBowlFood /></div>
            <div className='hidden lg:flex'>Food Order</div>
          </div>
          <div className='flex gap-2 justify-center items-center md:justify-start md:items-center'>
            <div><GiSelfLove /></div>
            <div className='hidden lg:flex'>Favorite Menu</div>
          </div>
          <div className='flex gap-2 justify-center items-center md:justify-start md:items-center'>
            <div><RiMessage3Line /></div>
            <div className='hidden lg:flex'>Message</div>
          </div>
          <div className='flex gap-2 justify-center items-center md:justify-start md:items-center'>
            <div><MdHistoryEdu /></div>
            <div className='hidden lg:flex'>Order History</div>
          </div>
          <div className='flex gap-2 justify-center items-center md:justify-start md:items-center'>
            <div><IoMdNotificationsOutline /></div>
            <div className='hidden lg:flex'>Notification</div>
          </div>
          <div className='flex gap-2 justify-center items-center md:justify-start md:items-center'>
            <div><FaMoneyBills /></div>
            <div className='hidden lg:flex'>Bill</div>
          </div>
          <div className='flex gap-2 justify-center items-center md:justify-start md:items-center'>
            <div><BiSolidHotel /></div>
            <div className='hidden lg:flex'>Restaurant</div>
          </div>
          <div className='flex gap-2 justify-center items-center md:justify-start md:items-center'>
            <div><FaCar /></div>
            <div className='hidden lg:flex'>Drivers</div>
          </div>
          <div className='flex gap-2 justify-center items-center md:justify-start md:items-center'>
            <div><IoSettingsOutline /></div>
            <div className='hidden lg:flex'>Settings</div>
          </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center h-32 rounded-lg'>
          <div className='flex flex-col gap-1 items-center w-32 md:bg-malachite-100 dark:bg-[#2C3E50] h-full rounded-lg'>
          <div className='hidden md:flex -mt-14 w-28'>
          <img src={category1}/> 
          </div>
          <div className=' flex flex-col gap-1 mt-3 px-5 text-xs'>
            <div className='hidden md:flex'>Share your own Recipe</div>
            <div>
              <div className='hidden md:flex items-center px-2 py-2 bg-malachite-600 text-white text-xs rounded-md '>Upload now</div>
              <div className='flex md:hidden text-4xl text-malachite-500'>
                <FaCloudUploadAlt />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
