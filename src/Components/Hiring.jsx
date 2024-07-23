import React from 'react'
import { FaCheck } from 'react-icons/fa6'

const Hiring = () => {
    return (
        <div className=' px-2 flex flex-col gap-10 sm:flex-row  sm:items-center'>
            <div className='sm:w-[50%] lg:flex lg:justify-center'>
                <div className='itemlist  bg-violet-200 px-9 py-24 rounded-lg lg:w-[24rem]'>
                    <div className='relative'>
                        <div className=' h-14 bg-[#6D3CC3] rounded-tl-lg rounded-tr-lg'>

                        </div>
                        <div className=' bg-white py-7 px-4 text-sm rounded-bl-lg rounded-br-lg'>
                            <p className=' font-medium'>Search Candidates</p>
                            <div className=' bg-[#F8FAFB] text-[#A5A5A5] text-sm rounded-3xl py-3 pl-3 mt-4'>
                                Search UI/UX Designer
                            </div>
                        </div>
                        <div className=' absolute top-[-2.67rem] left-12  bg-white py-3 px-4 rounded-lg '>
                        <ul className='checkbox grid grid-cols-2 gap-4'>
                            <li className=' text-sm font-semibold'>
                                <div className=' bg-[#6D3CC3] text-white rounded-md p-[0.20rem]'>
                                    <FaCheck />
                                </div>
                                <p>Fulltime</p>
                            </li>
                            <li className=' text-sm font-semibold'>
                                <div className=' bg-[#6D3CC3] text-white rounded-md p-[0.20rem]'>
                                    <FaCheck />
                                </div>
                                <p>Fulltime</p>
                            </li>
                            <li className=' text-sm font-semibold'>
                                <div className=' bg-[#6D3CC3] text-white rounded-md p-[0.20rem]'>
                                    <FaCheck />
                                </div>
                                <p>Fulltime</p>
                            </li>
                            <li className=' text-sm font-semibold'>
                                <div className=' bg-[#6D3CC3] text-white rounded-md p-[0.20rem]'>
                                    <FaCheck />
                                </div>
                                <p>Fulltime</p>
                            </li>
                        </ul>
                    </div>
                    </div>
                   
                </div>

            </div>
            <div className=' sm:w-[50%]  flex flex-col items-start gap-5 overflow-hidden'>
                <h2 className=' text-[#6D3CC3] font-medium text-3xl lg:text-5xl leading-10 lg:leading-[3.5rem]'>The all in-one hiring platform</h2>
                <p className=' text-[#AEAFAF] text-sm leading-6 lg:w-[30rem]'>Get more sales and maximize the conversion rates. Discover the most productive channels.</p>
                <button className=' bg-[#6D3CC3] text-white text-sm py-3 px-4 rounded-md'>Learn more</button>
                <ul className=' flex items-center gap-3'>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,12,14,15,16,17,18].map((item, index) =>
                            <li key={index} className=' w-4 h-1 bg-[#D1D1D1]'></li>
                        )
                    }
                </ul>
                <div className=' flex items-center  font-semibold gap-5 text-sm flex-wrap'>
                    <div className=' flex items-center gap-3'>
                        <div className=' bg-[black] text-white rounded-full p-1 text-xs'>
                            <FaCheck />
                        </div>
                        <p>Web Application</p>
                    </div>
                    <div className=' flex items-center gap-3'>
                        <div className=' bg-[black] text-white rounded-full p-1 text-xs'>
                            <FaCheck />
                        </div>
                        <p>Mobile Friendly</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hiring
