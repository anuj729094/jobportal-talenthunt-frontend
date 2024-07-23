import React from 'react'
import jobbg from '../assets/jobbg.png'
import { FaCheck } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className=' flex flex-col lg:flex-row items-center px-2 lg:px-7 xl:px-0'>
            <div className=' lg:w-[45%] text-center lg:text-left flex flex-col items-center lg:items-start gap-7'>
                <span className=' text-sm  sm:text-base border-2 border-solid border-black tracking-wider px-4 py-1 font-medium rounded-md'>
                    A RELIABLE PARTNER
                </span>
                <p className=' text-3xl sm:text-5xl font-bold leading-10 sm:leading-[4rem] text-[#100D40]'>Shaping your <br /> future with the best <br /> recruitment</p>
                <p className=' text-sm sm:text-base text-[#9D9CB0] max-w-[28rem]'>Growth and Success go hand-in-hand. We'll will help you with it. Focus to get your dream job</p>
                <div className=' max-w-[25rem] border-2 flex justify-between border-solid rounded-lg text-sm  px-1  w-full'>
                    <input type="text" placeholder='Enter your email..' className=' pl-3 outline-none border-0' />
                    <button className=' bg-[#6D3CC3] text-white h-full py-3 rounded-lg px-3 my-[0.30rem] '>Get Notify</button>
                </div>
                <div className=' flex items-center gap-5 text-sm flex-wrap'>
                    <div className=' flex items-center gap-3'>
                        <div className=' bg-[black] text-white rounded-full p-1 text-xs'>
                            <FaCheck />
                        </div>
                        <p>Update Everyday</p>
                    </div>
                    <div className=' flex items-center gap-3'>
                        <div className=' bg-[black] text-white rounded-full p-1 text-xs'>
                            <FaCheck />
                        </div>
                        <p>Easy application from email</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-[55%] '>
                <img src={jobbg} alt="" className='h-full w-full' />
            </div>
        </div>
    )
}

export default Hero
