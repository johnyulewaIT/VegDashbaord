import React from 'react';
import category1 from '../../assets/Images/category1.png'
import category3 from '../../assets/Images/category3.jpg'
import category from '../../assets/Images/category.jpg'
import category2 from '../../assets/Images/category2.jpg'
import bg1 from '../../assets/Images/bg1.jpg'
import bg2 from '../../assets/Images/bg2.jpg'
import product1 from '../../assets/Images/product1.jpg'
import product2 from '../../assets/Images/product2.jpg'
import product3 from '../../assets/Images/product3.jpg'
import product4 from '../../assets/Images/product4.jpg'
import product5 from '../../assets/Images/product5.jpg'
import person_1 from '../../assets/Images/person_1.jpg'
import { FaBasketShopping } from "react-icons/fa6";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { BsFillPiggyBankFill } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { MdAvTimer } from "react-icons/md";
import { GoLocation } from "react-icons/go";
const Main = () => {
  return (
    <div className=' px-4'>
     <div className='flex flex-col gap-3 md:flex-row mt-5 '>
      <div className='flex flex-col w-full md:w-[70%]'>
        <div className='flex flex-col md:flex-row  w-full gap-3 md:gap-5 justify-between items-center bg-malachite-500 dark:bg-dark rounded-lg h-52 p-2  text-[#022c22] dark:text-[#475569]'>
          <div className='flex flex-col  px-3 gap-1 md:gap-2  md:w-[45%]'>
            <div className='text-sm md:text-2xl font-bold'>All Best Recipe in one place</div>
            <div className='text-xs md:text-lg'>Upload You Homemade Recipe Here.</div>
            <div className='flex  items-center gap-3 w-28 justify-center bg-malachite-600 p-2 text-white rounded-md text-xs font-bold'>
              <div>Order Now</div>
              <div><FaBasketShopping /></div>
            </div>
          </div>
          <div className=' flex items-center justify-center w-full md:w-[55%]'> 
            <img src={category1} className=' w-2/3 h-28  md:w-58 md:h-48'/>
          </div>
        </div>
        <div>
          <div className='my-4 text-[#475569] font-bold'>Categories</div>
          <div className='grid  md:grid-cols-3 lg:grid-cols-5 gap-3  text-[#475569]'>
            <div className=' flex flex-col gap-2 items-center py-3 bg-white dark:bg-dark w-full md:w-28 rounded-md'>
              <div className='w-full px-2 '>
                <div className='bg-[#f0abfc] h-28 md:h-14 rounded-lg'>
                  <div className='flex items-center h-full justify-center'> 
                    <img src={category1} className='w-28 md:w-14'/>
                  </div>
                </div>
              </div>
              <div className='font-semibold'>All</div>
              <div>
                <div className='flex text-malachite-500 text-xl'><IoIosArrowDropdownCircle /></div>
              </div>
            </div>
            <div className=' flex flex-col gap-2 items-center py-3 bg-white dark:bg-dark w-full md:w-28 rounded-md'>
              <div className='w-full px-2 '>
                <div className='bg-[#f0abfc] h-28 md:h-14 rounded-lg'>
                  <div className='flex items-center h-full justify-center'> 
                    <img src={category1} className='w-28 md:w-14'/>
                  </div>
                </div>
              </div>
              <div className='font-semibold'>Flies</div>
              <div>
                <div className='flex text-malachite-500 text-xl'><IoIosArrowDropdownCircle /></div>
              </div>
            </div>
            <div className=' flex flex-col gap-2 items-center py-3 bg-white dark:bg-dark  w-full md:w-28 rounded-md'>
              <div className='w-full px-2 '>
                <div className='bg-[#f0abfc] h-28 md:h-14 rounded-lg'>
                  <div className='flex items-center h-full justify-center'> 
                    <img src={category1} className='w-28 md:w-14'/>
                  </div>
                </div>
              </div>
              <div className='font-semibold'>Hot Dog</div>
              <div>
                <div className='flex text-malachite-500 text-xl'><IoIosArrowDropdownCircle /></div>
              </div>
            </div>
            <div className=' flex flex-col gap-2 items-center py-3 bg-white dark:bg-dark  w-full md:w-28 rounded-md'>
              <div className='w-full px-2 '>
                <div className='bg-[#f0abfc] h-28 md:h-14 rounded-lg'>
                  <div className='flex items-center h-full justify-center'> 
                    <img src={category1} className='w-28 md:w-14'/>
                  </div>
                </div>
              </div>
              <div className='font-semibold'>SandWich</div>
              <div>
                <div className='flex text-malachite-500 text-xl'><IoIosArrowDropdownCircle /></div>
              </div>
            </div>
            <div className=' flex flex-col gap-2 items-center py-3 bg-white dark:bg-dark  w-full md:w-28 rounded-md'>
              <div className='w-full px-2 '>
                <div className='bg-[#f0abfc] h-28 md:h-14 rounded-lg'>
                  <div className='flex items-center h-full justify-center'> 
                    <img src={category1} className='w-28 md:w-14'/>
                  </div>
                </div>
              </div>
              <div className='font-semibold'>Fruity</div>
              <div>
                <div className='flex text-malachite-500 text-xl'><IoIosArrowDropdownCircle /></div>
              </div>
            </div>
          </div>

          <div className='grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4 text-[#475569]'>
            <div className='bg-white dark:bg-[#2C3E50]  p-1 rounded-lg w-full md:w-48'>
              <div className='flex flex-col gap-3 bg-[#fef2f2] dark:bg-dark text-[#475569] p-3  rounded-lg'>
                <div className='ml-4 bg-[#fecaca] p-1 rounded-md text-[#f87171] w-14 text-xs'>15% off</div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                  <div>
                    <img src={category3}  className='w-28 h-28 rounded-full'/>
                  </div>
                  <div className='flex flex-col  w-full items-center justify-center'>
                    <div className='font-semibold text-[#022c22] text-lg' >Blocholi Juice</div>
                    <div className='text-sm'>Taste our natural blocholi juice, well fined </div>
                  </div>
                  <div className='flex w-full justify-between items-center'>
                    <div className='font-bold text-[#022c22]'>15%</div>
                    <div className='bg-white dark:bg-dark  rounded-md p-2 text-malachite-600'>
                      <div><FaPlus /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white dark:bg-[#2C3E50]  p-1 rounded-lg w-full md:w-48'>
              <div className='flex flex-col gap-3 bg-[#fef2f2] dark:bg-dark text-[#475569] p-3  rounded-lg'>
                <div className='ml-4 bg-[#fecaca] p-1 rounded-md text-[#f87171] w-14 text-xs'>15% off</div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                  <div>
                    <img src={category}  className='w-28 h-28 rounded-full'/>
                  </div>
                  <div className='flex flex-col  w-full items-center justify-center'>
                    <div className='font-semibold text-[#022c22] text-lg' >Blocholi Juice</div>
                    <div className='text-sm'>Taste our natural blocholi juice, well fined </div>
                  </div>
                  <div className='flex w-full justify-between items-center'>
                    <div className='font-bold text-[#022c22]'>15%</div>
                    <div className='bg-white dark:bg-dark  rounded-md p-2 text-malachite-600'>
                      <div><FaPlus /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white dark:bg-[#2C3E50]  p-1 rounded-lg w-full md:w-48'>
              <div className='flex flex-col gap-3 bg-[#fef2f2] dark:bg-dark  text-[#475569] p-3  rounded-lg'>
                <div className='ml-4 bg-[#fecaca] p-1 rounded-md text-[#f87171] w-14 text-xs'>15% off</div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                  <div>
                    <img src={category3}  className='w-28 h-28 rounded-full'/>
                  </div>
                  <div className='flex flex-col  w-full items-center justify-center'>
                    <div className='font-semibold text-[#022c22] text-lg' >Blocholi Juice</div>
                    <div className='text-sm'>Taste our natural blocholi juice, well fined </div>
                  </div>
                  <div className='flex w-full justify-between items-center'>
                    <div>15%</div>
                    <div className='bg-white rounded-md p-2 text-malachite-600'>
                      <div><FaPlus /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white dark:bg-[#2C3E50] p-1 rounded-lg w-full md:w-48'>
              <div className='flex flex-col gap-3 bg-[#fef2f2] dark:bg-dark text-[#475569] p-3  rounded-lg'>
                <div className='ml-4 bg-[#fecaca] p-1 rounded-md text-[#f87171] w-14 text-xs'>15% off</div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                  <div>
                    <img src={product2}  className='w-28 h-28 rounded-full'/>
                  </div>
                  <div className='flex flex-col  w-full items-center justify-center'>
                    <div className='font-semibold text-[#022c22] text-lg' >Blocholi Juice</div>
                    <div className='text-sm'>Taste our natural blocholi juice, well fined </div>
                  </div>
                  <div className='flex w-full justify-between items-center'>
                    <div className='font-bold text-[#022c22]'>15%</div>
                    <div className='bg-white rounded-md p-2 text-malachite-600'>
                      <div><FaPlus /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white dark:bg-[#2C3E50] p-1 rounded-lg w-full md:w-48'>
              <div className='flex flex-col gap-3 bg-[#fef2f2] dark:bg-dark text-[#475569] p-3  rounded-lg'>
                <div className='ml-4 bg-[#fecaca] p-1 rounded-md text-[#f87171] w-14 text-xs'>15% off</div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                  <div>
                    <img src={bg1}  className='w-28 h-28 rounded-full'/>
                  </div>
                  <div className='flex flex-col  w-full items-center justify-center'>
                    <div className='font-semibold text-[#022c22] text-lg' >Blocholi Juice</div>
                    <div className='text-sm'>Taste our natural blocholi juice, well fined </div>
                  </div>
                  <div className='flex w-full justify-between items-center'>
                    <div className='font-bold text-[#022c22]'>15%</div>
                    <div className='bg-white rounded-md p-2 text-malachite-600'>
                      <div><FaPlus /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white dark:bg-[#2C3E50] p-1 rounded-lg w-full md:w-48'>
              <div className='flex flex-col gap-3 bg-[#fef2f2] dark:bg-dark text-[#475569] p-3  rounded-lg'>
                <div className='ml-4 bg-[#fecaca] p-1 rounded-md text-[#f87171] w-14 text-xs'>15% off</div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                  <div>
                    <img src={bg2}  className='w-28 h-28 rounded-full'/>
                  </div>
                  <div className='flex flex-col  w-full items-center justify-center'>
                    <div className='font-semibold text-[#022c22] text-lg' >Blocholi Juice</div>
                    <div className='text-sm'>Taste our natural blocholi juice, well fined </div>
                  </div>
                  <div className='flex w-full justify-between items-center'>
                    <div className='font-bold text-[#022c22]'>15%</div>
                    <div className='bg-white rounded-md p-2 text-malachite-600'>
                      <div><FaPlus /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white dark:bg-[#2C3E50] p-1 rounded-lg w-full md:w-48'>
              <div className='flex flex-col gap-3 bg-[#fef2f2] dark:bg-dark text-[#475569] p-3  rounded-lg'>
                <div className='ml-4 bg-[#fecaca] p-1 rounded-md text-[#f87171] w-14 text-xs'>15% off</div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                  <div>
                    <img src={product1}  className='w-28 h-28 rounded-full'/>
                  </div>
                  <div className='flex flex-col  w-full items-center justify-center'>
                    <div className='font-semibold text-[#022c22] text-lg' >Blocholi Juice</div>
                    <div className='text-sm'>Taste our natural blocholi juice, well fined </div>
                  </div>
                  <div className='flex w-full justify-between items-center'>
                    <div className='font-bold text-[#022c22]'>15%</div>
                    <div className='bg-white rounded-md p-2 text-malachite-600'>
                      <div><FaPlus /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white dark:bg-[#2C3E50] p-1 rounded-lg w-full md:w-48'>
              <div className='flex flex-col gap-3 bg-[#fef2f2] dark:bg-dark text-[#475569] p-3  rounded-lg'>
                <div className='ml-4 bg-[#fecaca] p-1 rounded-md text-[#f87171] w-14 text-xs'>15% off</div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                  <div>
                    <img src={product3}  className='w-28 h-28 rounded-full'/>
                  </div>
                  <div className='flex flex-col  w-full items-center justify-center'>
                    <div className='font-semibold text-[#022c22] text-lg' >Blocholi Juice</div>
                    <div className='text-sm'>Taste our natural blocholi juice, well fined </div>
                  </div>
                  <div className='flex w-full justify-between items-center'>
                    <div className='font-bold text-[#022c22]'>15%</div>
                    <div className='bg-white rounded-md p-2 text-malachite-600'>
                      <div><FaPlus /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className=' flex flex-col items-center py-8 w-full  bg-white dark:bg-dark md:w-[30%] rounded-md my-4 '>
        <div className='flex flex-col  w-full'>
          <div className='mb-8  px-4 '>
            <div className='bg-malachite-200 p-3 rotate-2 h-48 rounded-md w-full lg:w-[95%]'>
              <div className='bg-malachite-400  -rotate-3 h-48 rounded-md w-full  lg:w-full'>
                <div className='flex flex-col py-4 text-white h-full items-center justify-between'>
                  <div className='flex w-full justify-between items-center px-4'>
                    <div className='font-semibold'>equityBank</div>
                    <div className='text-2xl'><BsFillPiggyBankFill /></div>
                  </div>
                  <div>
                    <div className='text-xl  lg:text-2xl md:font-semibold'>4873 2648 8135</div>
                  </div>
                  <div className='flex w-full justify-between items-center px-4'>
                    <div>
                      <div className='text-xs'>Cardholder Name</div>
                      <div>John Ule Mdoe</div>
                    </div>
                    <div>
                      <div className='text-xs'>Expired Date</div>
                      <div>04/24</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex w-full justify-between items-center px-3'>
            <div className='font-semibold text-[#475569]'>Order Now</div>
            <div className='flex gap-2 items-center'>
              <div className='text-malachite-400'>View all</div>
              <div className='text-malachite-400'><IoMdArrowDroprightCircle /></div>
            </div>
          </div>
          <div className='flex w-full justify-between items-center px-4 my-4'>
            <div className='flex gap-2 '>
              <div className='flex items-center justify-center bg-[#fecaca] w-10 h-10 rounded-md p-1'>
                <div>
                  <img src={product3}  className='w-8 h-8 rounded-full'/>
                </div>
              </div>
              <div className='text-[#475569]'>
                <div className='font-semibold'>Green peas</div>
                <div className='text-sm'>$22</div>
              </div>
            </div>
            <div className='text-[#475569]'>x3</div>
          </div>
          <div className='flex w-full justify-between items-center px-4 my-3'>
            <div className='flex gap-2 '>
              <div className='flex items-center justify-center bg-[#fecaca] w-10 h-10 rounded-md p-1'>
                <div>
                  <img src={product3}  className='w-8 h-8 rounded-full'/>
                </div>
              </div>
              <div className='text-[#475569]'>
                <div className='font-semibold'>Green peas</div>
                <div className='text-sm'>$22</div>
              </div>
            </div>
            <div className='text-[#475569]'>x3</div>
          </div>
          <div className='flex w-full justify-between items-center px-4 my-3'>
            <div className='flex gap-2 '>
              <div className='flex items-center justify-center bg-[#fecaca] w-10 h-10 rounded-md p-1'>
                <div>
                  <img src={product2}  className='w-8 h-8 rounded-full'/>
                </div>
              </div>
              <div className='text-[#475569]'>
                <div className='font-semibold'>Green peas</div>
                <div className='text-sm'>$22</div>
              </div>
            </div>
            <div className='text-[#475569]'>x6</div>
          </div>
          <div className='flex w-full justify-between items-center px-4 my-3'>
            <div className='flex gap-2 '>
              <div className='flex items-center justify-center bg-[#fecaca] w-10 h-10 rounded-md p-1'>
                <div>
                  <img src={product1}  className='w-8 h-8 rounded-full'/>
                </div>
              </div>
              <div className='text-[#475569]'>
                <div className='font-semibold'>Green peas</div>
                <div className='text-sm'>$22</div>
              </div>
            </div>
            <div className='text-[#475569]'>x2</div>
          </div>
          <div className='flex w-full justify-between items-center px-4 my-3'>
            <div className='flex gap-2 '>
              <div className='flex items-center justify-center bg-[#fecaca] w-10 h-10 rounded-md p-1'>
                <div>
                  <img src={product5}  className='w-8 h-8 rounded-full'/>
                </div>
              </div>
              <div className='text-[#475569]'>
                <div className='font-semibold'>Green peas</div>
                <div className='text-sm'>$22</div>
              </div>
            </div>
            <div className='text-[#475569]'>x4</div>
          </div>
          <div className='flex w-full justify-between items-center px-4 my-3'>
            <div className='flex gap-2 '>
              <div className='flex items-center justify-center bg-[#fecaca] w-10 h-10 rounded-md p-1'>
                <div>
                  <img src={product3}  className='w-8 h-8 rounded-full'/>
                </div>
              </div>
              <div className='text-[#475569]'>
                <div className='font-semibold'>Green peas</div>
                <div className='text-sm'>$22</div>
              </div>
            </div>
            <div className='text-[#475569]'>x1</div>
          </div>
          <div className='flex w-full justify-between items-center px-4 my-3'>
            <div className='flex gap-2 '>
              <div className='flex items-center justify-center bg-[#fecaca] w-10 h-10 rounded-md p-1'>
                <div>
                  <img src={bg1}  className='w-8 h-8 rounded-full'/>
                </div>
              </div>
              <div className='text-[#475569]'>
                <div className='font-semibold'>Green peas</div>
                <div className='text-sm'>$22</div>
              </div>
            </div>
            <div className='text-[#475569]'>x5</div>
          </div>
          <div className='flex w-full justify-between items-center px-4 my-3'>
            <div className='flex gap-2 '>
              <div className='flex items-center justify-center bg-[#fecaca] w-10 h-10 rounded-md p-1'>
                <div>
                  <img src={product3}  className='w-8 h-8 rounded-full'/>
                </div>
              </div>
              <div className='text-[#475569]'>
                <div className='font-semibold'>Green peas</div>
                <div className='text-sm'>$22</div>
              </div>
            </div>
            <div className='text-[#475569]'>x3</div>
          </div>
          <div className='flex  justify-between items-center bg-malachite-100 dark:bg-[#212F3D] rounded-md shadow-lg mx-2 px-4 h-[5rem]'>
            <div>
              <img src={person_1} className='w-10 h-10 rounded-full' />
            </div>
            <div className='flex items-center justify-center bg-white dark:bg-dark w-8 h-8 rounded-md'>
              <div className='text-malachite-500'><BiSolidPhoneCall /></div>
            </div>
          </div>
          <div className='flex flex-col w-full  text-[#475569] items-start gap-4  rounded-md m-4 px-4 '>
            <div className='flex gap-3 items-center'>
              <div className='flex items-center text-white justify-center bg-malachite-500 w-8 h-8 rounded-full'>
                <MdAvTimer />
              </div>
              <div>
                <div className='text-sm'>My delivery Time</div>
                <div className='text-xs font-semibold'>50 Minutes</div>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='flex items-center text-white justify-center bg-malachite-500 w-8 h-8 rounded-full'>
                <GoLocation />
              </div>
              <div>
                <div className='text-sm'>My delivery Address</div>
                <div className='text-xs font-semibold'>59779 Oklahoma</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Main;
