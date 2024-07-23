import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaIndustry } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { addcompanydetails } from '../redux/company/action';
import { ImSpinner8 } from "react-icons/im";

const CompanyForm = ({setshow}) => {
    const dispatch = useDispatch()
    const{isloading , iserror , msg}=useSelector((state)=>state.company)
    const [companyData, setCompanyData] = useState({
        img: "", companyname: "", companytype: "", description: "" , location:"" ,address:"" ,employess:"" ,established:""
    })

    const handleimg = async (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('upload_preset', 'fmvfiese');
        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/dw4wbtjju/image/upload`,
                {
                    method: 'POST',
                    body: formData,
                }
            );
            const data = await response.json();
            setCompanyData({ ...companyData, img: data.secure_url });
        } catch (error) {
            console.error('Error uploading the image', error);
        }
    };
    
    useEffect(()=>{
      if(iserror.status){
        if(typeof(iserror.msg)!=="object"){
            alert(iserror.msg)
            dispatch({
                type:"clearerror"
            })
        }
        setTimeout(() => {
            dispatch({
                type:"clearerror"
            })
        }, 4000);
      }
    },[iserror])
    const postcompanydata =(e)=>{
        e.preventDefault()
        dispatch(addcompanydetails(companyData))
    }
    useEffect(()=>{
        if(msg==="company added successfully"){
            setCompanyData({
                img: "", companyname: "", companytype: "", description: "" , location:"" ,address:"" ,employess:"" ,established:""
            })
            setshow(false)
            dispatch({
                type:"clearmessage"
            })
        }
    },[msg])
    return (
        <div className=' fixed bg-[#0000004a] sm:px-5 sm:py-4 flex justify-center w-full h-[100vh] overflow-auto top-0 z-50 left-0'>
            <div className=' bg-white sm:mt-20 h-fit sm:px-10  w-full  sm:rounded-xl  py-4 px-3 flex flex-col items-center sm:w-[40rem]'>
                <div className=' flex justify-end w-full text-2xl mt-3'>
                    <button onClick={()=>setshow(false)}><IoCloseSharp /></button>
                </div>
                <h1 className=' font-semibold text-[#6A6A6A] text-lg my-2'>Company Details</h1>
                <form className='w-full mt-4 px-4 flex flex-col items-end gap-5 text-sm ' onSubmit={postcompanydata}>
                    <div className='flex sm:flex-row  flex-col items-center sm:items-start sm:gap-14  gap-4 w-full'>
                        <div className=' flex flex-col items-start '>
                            <label htmlFor='companyimage' className=' cursor-pointer border border-solid rounded-full p-4 text-[9rem]'>
                                {
                                    companyData.img ? <img src={companyData.img} className=' w-16 sm:w-[20rem] ' /> : <FaIndustry />
                                }
                            </label>
                            <input type="file" name="" id="companyimage" hidden onChange={handleimg} />
                            {iserror.status && iserror.msg.img && <span className=' text-xs mt-1 text-red-500 font-medium'>{iserror.msg.img}</span>}
                        </div>
                        <div className=' flex flex-col gap-6 w-full'>
                            <div className=' flex flex-col gap-3 '>
                                <label htmlFor="companyname" className=' text-sm font-medium'>Company Name</label>
                                <input type="text" id="companyname" required className=' rounded-md border border-solid py-3 pl-2 outline-none focus:outline-[#6D3CC3]' value={companyData.companyname} onChange={(e)=>setCompanyData({...companyData , companyname:e.target.value})}/>
                                {iserror.status && iserror.msg.companyname && <span className=' text-xs mt-1 text-red-500 font-medium'>{iserror.msg.companyname}</span>}
                            </div>
                            <div className=' flex flex-col gap-3'>
                                <label htmlFor="Companytype" className=' text-sm font-medium'>Company Type</label>
                                <input type="text" id="Companytype" required className=' rounded-md border border-solid py-3 pl-2 outline-none focus:outline-[#6D3CC3]' placeholder='e.g. IT' value={companyData.companytype} onChange={(e)=>setCompanyData({...companyData , companytype:e.target.value})}/>
                            </div>
                            <div className=' flex flex-col gap-3'>
                                <label htmlFor="Location" className=' text-sm font-medium'>Location</label>
                                <input type="text" id="Location" required className=' rounded-md border border-solid py-3 pl-2 outline-none focus:outline-[#6D3CC3]' placeholder='e.g. Delhi' value={companyData.location} onChange={(e)=>setCompanyData({...companyData , location:e.target.value})}/>
                            </div>
                        </div>
                    </div>
                    <div className=' flex flex-col  gap-3 w-full'>
                        <label htmlFor="description" className=' text-sm  font-medium'>Company Description</label>
                        <textarea type="text" rows={4} maxLength="200" id="description" required className='w-full rounded-md border border-solid py-3 pl-2 outline-none focus:outline-[#6D3CC3]' value={companyData.description} onChange={(e) => setCompanyData({ ...companyData, description: e.target.value })} ></textarea>
                        {iserror.status && iserror.msg.description && <span className=' text-xs mt-1 text-red-500 font-medium'>{iserror.msg.description}</span>}
                        <span className='text-right'>{companyData.description.length}/200</span>
                    </div>
                    <div className=' flex flex-col gap-3 w-full '>
                        <label htmlFor="address" className=' text-sm  font-medium'>Full Address</label>
                        <textarea type="text" rows={4} maxLength="200" id="address" required placeholder='Building No. / Locality / Area' className='w-full rounded-md border border-solid py-3 pl-2 outline-none focus:outline-[#6D3CC3]' value={companyData.address} onChange={(e) => setCompanyData({ ...companyData, address: e.target.value })} ></textarea>
                        {iserror.status && iserror.msg.address && <span className=' text-xs mt-1 text-red-500 font-medium'>{iserror.msg.address}</span>}
                    </div>
                    <div className=' flex items-center flex-col sm:flex-row gap-4 w-full' >
                        <div className=' flex flex-col  gap-3 w-full'>
                            <label htmlFor="description" className=' text-sm  font-medium'>No. of Employes</label>
                            <input type="text" id="companyname" required className=' rounded-md border border-solid py-3 pl-2 outline-none focus:outline-[#6D3CC3]' placeholder='e.g. 500' value={companyData.employess} onChange={(e) => setCompanyData({ ...companyData, employess: e.target.value })} />
                            {iserror.status && iserror.msg.employess && <span className=' text-xs mt-1 text-red-500 font-medium'>{iserror.msg.employess}</span>}
                        </div>
                        <div className=' flex flex-col gap-3  w-full'>
                            <label htmlFor="address" className=' text-sm  font-medium'>Established Date</label>
                            <input type="date" id="companyname" required className=' rounded-md border border-solid py-3 pl-2 outline-none focus:outline-[#6D3CC3]'  value={companyData.established} onChange={(e) => setCompanyData({ ...companyData, established: e.target.value })}/>
                        </div>
                    </div>
                    <button type='submit' className=' bg-[#6A38C2] rounded-md py-3 px-7 font-medium text-white'>
                        {isloading ? <ImSpinner8 className='spinner text-xl' /> : <p>Submit</p>}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CompanyForm
