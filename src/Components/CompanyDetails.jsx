import React from 'react'
import { useSelector } from 'react-redux'
import { IoLocationOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { IoBusinessOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const CompanyDetails = ({companydetails}) => {
  return (
    <div className=' w-full py-5 flex flex-col gap-4 md:py-8'>
      <div className=' flex justify-between'>
      <img src={companydetails.img} alt="" className=' w-14 sm:w-20 lg:w-24 rounded-full' />
      <div className=' text-xl flex gap-2'>
        <button><FiEdit2/></button>
        <button><MdDeleteOutline/></button>
      </div>
      </div>
      <div className='flex items-center gap-4'>
        <h2 className='text-xl sm:text-2xl lg:text-4xl font-semibold'>About {companydetails.companyname}</h2>
        <p className=' text-xl flex items-center gap-1'><IoLocationOutline/>{companydetails.location}</p>
      </div>
      <p className=' text-sm text-[#898989]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos ducimus quibusdam, asperiores incidunt magni sit possimus est accusantium nobis a vero, debitis saepe vitae, animi id temporibus eligendi eum atque quae sed architecto eos doloremque. Ea ratione quos beatae sequi consequuntur odio tempora exercitationem facere ipsam. Unde, quibusdam molestias!
      </p>
      <div className=' flex flex-col gap-3'>
        <h4 className=' font-semibold text-xl'>Address</h4>
        <p className=' text-sm text-[#898989]'>{companydetails.address}</p>
      </div>
      <div className=' border border-solid text-lg rounded-md py-6 px-4 text-[#898989]'>
        <ul className=' flex items-center justify-between gap-5 flex-wrap'>
          <li className=' flex items-center gap-1  font-medium'>
             <IoIosPeople className=' text-2xl'/> {companydetails.employess} Employees
          </li>
          <li className=' flex items-center gap-1  font-medium'>
             <MdDateRange className=' text-2xl'/> {companydetails.established}
          </li>
          <li className=' flex items-center gap-1  font-medium'>
             <IoBusinessOutline className=' text-2xl'/> {companydetails.companytype}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CompanyDetails
