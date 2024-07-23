import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiEdit2 } from "react-icons/fi";
import CompanyForm from '../Components/CompanyForm';
import { getcompanydetails } from '../redux/company/action';
import CompanyDetails from '../Components/CompanyDetails';
import { ImSpinner8 } from 'react-icons/im';

const Profle = () => {
    const [show, setShow] = useState(false)
    const { userdata } = useSelector((state)=>state.user)
    const {isloading ,companydetails} = useSelector((state)=>state.company)
    return (
        <div className=' px-2 flex justify-center  '>
            <div className='flex flex-col items-center sm:w-[30rem] lg:w-[50rem]'>
                <div className=' user-data flex items-start md:gap-4  text-sm  w-full text-[#898989] border-b-[2px] border-solid py-5 md:py-8 '>
                    <div className='relative flex flex-col gap-2'>
                        <h1 className=' text-black font-semibold text-xl md:text-4xl'>{userdata.firstname} {userdata.lastname}</h1>
                        <p>{userdata.email}</p>
                        <p>Role in company : {userdata.role}</p>
                    </div>
                    <button className='  text-2xl mt-1 '>
                        <FiEdit2 />
                    </button>
                </div>
                {
                 isloading ? <ImSpinner8 className=' animate text-[#6D3CC3] text-2xl my-4'/> : !companydetails ? <button className=' bg-[#6D3CC3] text-white text-sm py-4 px-5 my-4 rounded-lg' onClick={() => setShow(true)}>Add company details</button> : <CompanyDetails companydetails={companydetails}/>
                }
                {show && <CompanyForm setshow={setShow} />}
            </div>
        </div>

    )
}

export default Profle
