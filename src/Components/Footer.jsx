import React from 'react'
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <div className=' xl:w-[75rem]   px-3 my-10'>
            <div className='md:flex md:gap-32 lg:gap-10 md:justify-between'>
                <div className=' md:w-[40%]  '>
                    <h2 className=' text-2xl sm:text-3xl italic font-semibold'><span className=' text-[#6C3BC3]'>Talent</span><span className=' text-[#FA4F09]'>hunt</span></h2>
                    <p className=' text-xs my-3 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis incidunt exercitationem animi odit, facilis architecto nihil placeat, eos est itaque, reprehenderit quod explicabo? Rerum quia pariatur cupiditate impedit? Architecto voluptatum quis quibusdam corrupti saepe nam vel neque accusamus dicta. Cum.</p>
                </div>
                <ul className='grid grid-cols-2  mt-7 sm:mt-0  lg:grid-cols-4 gap-4 md:w-[60%] '>
                    <li className=' '>
                        <p><span className=' font-bold '>Quick Links</span></p>
                        <ul className=' text-xs inline-flex flex-col gap-3 mt-4 text-[#636262]'>
                            <li className=' '>Home</li>
                            <li>About Us</li>
                            <li>Jobs</li>
                            <li>Services</li>
                            <li>Contact Us</li>
                        </ul>
                    </li>
                    <li className=' '>
                        <p><span className=' font-bold '>Legal</span></p>
                        <ul className=' text-xs inline-flex flex-col gap-3 mt-4  text-[#636262]'>
                            <li className=' '>Terms of Use</li>
                            <li>Help Center</li>
                            <li>Jobs</li>
                            <li>Privacy Policy</li>
                            <li>Complaints</li>
                        </ul>
                    </li>
                    <li className=' '>
                        <p><span className=' font-bold '>Follow US</span></p>
                        <ul className=' text-xs inline-flex flex-col gap-3 mt-4  text-[#636262]'>
                            <li className=' '>Fadebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Linked In</li>
                            <li>Youtube</li>
                        </ul>
                    </li>
                    <li className=' '>
                        <p><span className=' font-bold '>Contact Us</span></p>
                        <ul className=' text-xs inline-flex flex-col gap-3 mt-4  text-[#636262]'>
                            <li className='flex items-center gap-1 '><IoCall className=' font-semibold' />111-222-333-444</li>
                            <li className=' flex items-center gap-1'><IoLocationSharp className=' font-semibold' /><p>Delhi,India</p></li>

                        </ul>
                    </li>
                </ul>
            </div>
            <p className=' text-center mt-10 text-sm'>&copy;copy 2024 Talenthunt - All Rights Reserved</p>
        </div>
    )
}

export default Footer
