import React from 'react'
import { PiShootingStarDuotone } from "react-icons/pi";

const Talented = () => {
  return (
    <div className=' px-2 my-10 flex flex-col items-center'>
      <div className=' text-center flex flex-col items-center  gap-5 sm:w-[30rem] lg:w-[40rem] '>
        <h1 className=' text-[#6D3CC3] font-bold text-3xl leading-[2.5rem] md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[3.5rem]'>Leverage global world-class talented people</h1>
        <p className=' text-sm text-[#AEAFAF] font-medium leading-6'>Discover the optimal match for your company and get the best results together</p>
      </div>
      <ul className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:w-[60rem] mt-12 gap-4'>
        <li>
            <div className='itemlist bg-white rounded-md flex flex-col gap-4 items-start pb-6 pt-5 px-4'>
                <div className=' bg-[#ebeaee] text-[#6D3CC3] text-4xl rounded-md p-3'>
                   <PiShootingStarDuotone/>
                </div>
               <h2 className=' text-[#6D3CC3] text-xl font-medium'>80% Faster Hiring</h2>
               <p className=' text-[#AEAFAF] text-sm'>No more back and forth to find the right qualified candidates</p>
            </div>
        </li>
        <li>
            <div className='itemlist bg-white rounded-md flex flex-col gap-4 items-start pb-6 pt-5 px-4'>
                <div className='bg-[#6D3CC3] text-white text-4xl rounded-md p-3'>
                   <PiShootingStarDuotone/>
                </div>
               <h2 className=' text-[#6D3CC3] text-xl font-medium'>80% Faster Hiring</h2>
               <p className=' text-[#AEAFAF] text-sm'>No more back and forth to find the right qualified candidates</p>
            </div>
        </li>
        <li>
            <div className='itemlist bg-white rounded-md flex flex-col gap-4 items-start pb-6 pt-5 px-4'>
                <div className=' bg-[#ebeaee] text-[#6D3CC3]  text-4xl rounded-md p-3'>
                   <PiShootingStarDuotone/>
                </div>
               <h2 className=' text-[#6D3CC3] text-xl font-medium'>80% Faster Hiring</h2>
               <p className=' text-[#AEAFAF] text-sm'>No more back and forth to find the right qualified candidates</p>
            </div>
        </li>
      </ul>
    </div>
  )
}

export default Talented
