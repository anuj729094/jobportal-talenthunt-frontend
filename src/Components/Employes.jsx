import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import { FaWandMagicSparkles } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const Employes = () => {
    return (
        <div className=' px-2 my-20 flex flex-col gap-10   sm:flex-row sm:items-center'>
            <div className=' flex flex-col items-start gap-5  sm:w-[50%] overflow-hidden'>
                <h2 className=' text-[#6D3CC3] font-medium text-3xl lg:text-5xl leading-10 lg:leading-[3.5rem]'>We're always here.<br />Employees come and go</h2>
                <p className=' text-[#AEAFAF] text-sm leading-6 lg:w-[30rem]'>Discover the optimal match for your company and get the best result together</p>
                <button className=' bg-[#6D3CC3] text-white text-sm py-3 px-4 rounded-md'>Learn more</button>
                <ul className=' flex items-center gap-3'>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18].map((item, index) =>
                            <li key={index} className=' w-4 h-1 bg-[#D1D1D1]'></li>
                        )
                    }
                </ul>
                <div className=' flex items-center  font-semibold gap-5 text-sm flex-wrap'>
                    <div className=' flex items-center gap-3'>
                        <div className=' bg-[black] text-white rounded-full p-1 text-xs'>
                            <FaCheck />
                        </div>
                        <p>Top 0.1% Candidates</p>
                    </div>
                    <div className=' flex items-center gap-3'>
                        <div className=' bg-[black] text-white rounded-full p-1 text-xs'>
                            <FaCheck />
                        </div>
                        <p>Already Tested</p>
                    </div>
                </div>
            </div>
            <div className=' sm:w-[50%] flex justify-center  '>
                <div className='itemlist bg-violet-200 flex flex-col gap-4 rounded-xl px-6 py-12 lg:w-[24rem]'>
                    <div className=' bg-[#6D3CC3] rounded-md p-3 py-4 text-white flex items-center justify-between'>
                        <div className=' flex gap-2 w-[70%] '>
                            <div className=' bg-[#FFEDB6] rounded-full p-3'>
                                <FaWandMagicSparkles />
                            </div>
                            <div className=' font-medium w-full'>
                                <h4>UI/UX Jobs</h4>
                                <div className='mt-1 bg-[#EEF4F6] rounded-3xl w-full h-4'></div>
                            </div>
                        </div>
                        <p className=' w-[20%]'>$20/hr</p>
                    </div>
                    <div className=' bg-white rounded-md p-3'>
                        <div className='flex justify-between items-center font-semibold'>
                            <p className=' text-lg'>Review Proposal</p>
                            <IoIosArrowDown />
                        </div>
                        <div className=' flex flex-wrap justify-between gap-5 items-center my-3'>
                            <div className=' flex items-center gap-3'>
                                <div className=' bg-[#6D3CC3] rounded-full p-3 text-white'>
                                    <FaUser />
                                </div>
                                <div>
                                    <h5 className=' text-lg font-medium'>John Doe</h5>
                                    <p className=' text-[#939393] text-sm'>UI/UX Designer</p>
                                </div>
                            </div>
                            <p className=' text-sm'>2 days ago</p>
                        </div>
                        <div className=' flex flex-col gap-4'>
                            <div className=' bg-[#EEF4F6] rounded-3xl w-full h-4'></div>
                            <div className=' bg-[#EEF4F6] rounded-3xl w-[80%] h-4'></div>
                            <div className=' bg-[#EEF4F6] rounded-3xl w-[50%] h-4'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employes
