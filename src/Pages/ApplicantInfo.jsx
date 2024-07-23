import React, { useEffect, useState } from 'react'
import { MdModeEditOutline } from "react-icons/md";
import { useLocation, useParams } from 'react-router-dom'
import { statusarr } from '../utilis/arr';
import { useDispatch, useSelector } from 'react-redux';
import { updateapplicant } from '../redux/Jobs/action';

const ApplicantInfo = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const [userData, setuserData] = useState(location.state)
    const {Status}=useSelector((state)=>state.jobs)
    const {id} = useParams()
    const[show , setShow]=useState(false)
    useEffect(()=>{
      if(Status){
         setuserData({...location.state , Status:Status})
         setShow(false)
      }
    },[Status])
    return (
        <div className=' px-2 md:px-0 md:flex md:justify-center '>
            <div className=' border border-solid rounded-md  md:w-[35rem] lg:w-[50rem] px-3 lg:px-8'>
                <div className=' my-4 py-3 border-b border-solid flex items-start justify-between gap-10'>
                    <div>
                        <h1 className=' font-semibold text-lg lg:text-3xl'>{userData.fullname} {userData.lastname}</h1>
                        <p className=' text-sm font-medium text-[#929292] mt-3'>{userData.location}</p>
                    </div>
                    <div className=' relative inline-flex justify-center items-center text-sm flex-wrap gap-2'>
                        <p className=' '>Application Status :</p>
                        <div className=' flex flex-wrap items-center gap-1 font-semibold'>
                            {userData.Status}
                            <button onClick={()=>setShow(true)}><MdModeEditOutline /></button>
                        </div>
                      {show &&  <div className=' border border-solid bg-white absolute right-0 top-8 tracking-wide w-full rounded-md'>
                            <ul>
                                {
                                    statusarr.filter((item) => item !== userData.Status).map((status,index) =>
                                        <li key={index} className=' hover:bg-[#6D3CC3] hover:text-white font-medium cursor-pointer py-3 pl-3 border-b border-solid' onClick={()=>dispatch(updateapplicant([
                                            {
                                                id:id,
                                            },
                                            {
                                                Status:status
                                            }
                                        ]))}>{status}</li>
                                    )
                                }
                            </ul>
                        </div> }
                    </div>
                </div>
                <div className=' text-sm flex items-center flex-wrap gap-8 md:gap-14  my-4 py-3 border-b border-solid '>
                    <div>
                        <p className=' text-[#969696] font-semibold'>Email</p>
                        <p className=' mt-2'>{userData.email}</p>
                    </div>
                    <div>
                        <p className=' text-[#969696] font-semibold'>Phone</p>
                        <p className=' mt-2'>{userData.phone}</p>
                    </div>
                    <div>
                        <p className=' text-[#969696] font-semibold'>GITHUB</p>
                        <a href={userData.github}>
                            <p className=' mt-2'>GITHUB URL</p>
                        </a>
                    </div>
                </div>
                <div className=' my-4 py-3'>
                    <h4 className=' font-semibold'>Summary</h4>
                    <p className=' text-[#969696] text-sm mt-3'>{userData.summary}</p>
                </div>
                <div className='my-4 py-3'>
                    <h2 className=' font-semibold'>Projects</h2>
                    <ul className=' flex flex-col gap-7'>
                        {
                            userData.projects.map((item,index) =>
                                <li key={index}>
                                    <div className=' inline-flex flex-col gap-4 max-w-[35rem]  border-b border-solid py-4'>
                                        <h2 className='font-semibold text-lg'>{item.title}</h2>
                                        <p className=' text-sm text-[#929292]'>
                                            {item.description}
                                        </p>
                                        <a href={item.url} target="_blank">Live Demo</a>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className=' my-4 py-3'>
                    <h2 className=' font-semibold'>Projects</h2>
                    <ul className=' flex flex-wrap items-center gap-6 mt-4'>
                        {
                            userData.skills.map((item, index) =>
                                <li key={index} className=' bg-[#F8F8F8] text-[#777777] font-medium py-3 px-5 rounded-3xl'>{item}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ApplicantInfo
