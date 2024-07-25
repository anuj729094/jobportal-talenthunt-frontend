import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { ImSpinner8 } from "react-icons/im";
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../redux/user/action';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Sign = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const[type , setType]=useState("password")
    const { isloading, iserror, msg } = useSelector((state) => state.user)
    const [userObj, setUserObj] = useState({
        email: "", password: "", firstname: "", lastname: "", role: ""
    })
    const postdata = (e) => {
        e.preventDefault()
        dispatch(signup(userObj))
    }
    useEffect(() => {
        if (iserror.status && typeof (iserror.msg) !== "object") {
            alert(iserror.msg)
            setTimeout(() => {
                dispatch({
                    type: "clearerror"
                })
            }, 9000);
        }
    }, [iserror])
    useEffect(() => {
        if (msg === "Registration Successfull") {
            navigate("/login-user")
            dispatch({
                type: "clearmessage"
            })
            dispatch({
                type:"clearerror"
            })
        }
    }, [msg])
    return (
        <div className='xl:w-[75rem] flex flex-col items-center my-5 md:my-10 px-3  w-full'>
            <div className=' text-center'>
                <h2 className='font-bold text-2xl md:text-4xl tracking-wide leading-9'>Sign Up and apply for free</h2>
                <p className=' text-sm text-[#636262] mt-3'>2,00,000+ companies hiring on Talenthunt</p>
            </div>
            <div className='mt-7 w-full listgrid flex flex-col gap-6 border-[1px] border-solid rounded-xl md:w-[30rem] py-10 px-5'>
                {/* <button className='listgrid font-medium  w-full flex items-center justify-center gap-2 py-3  border-[1px] border-solid rounded-xl '>
                    <FcGoogle />
                    <p>Sign Up with Google</p>
                </button> */}
                {/* <div className=' inline-flex items-center justify-center gap-2'>
                    <span className=' w-[44%] h-[1px] bg-black'></span>
                    <span>OR</span>
                    <span className=' w-[44%] h-[1px] bg-black'></span>
                </div> */}
                <form className='flex flex-col gap-6 ' onSubmit={postdata}>
                    <div className=' relative flex flex-col'>
                        <label htmlFor="email" className=' text-sm'>Email</label>
                        <input type="email" id='email' value={userObj.email} onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} required className=' focus:outline-[#6A38C2] outline-none w-full py-2 mt-2 pl-2 border-[1px] border-solid rounded' />
                        <MdEmail className=' absolute right-2 top-10' />
                        {iserror.status && iserror.msg.email && <span className=' text-xs mt-1 text-red-500 font-medium'>{iserror.msg.email}</span>}
                    </div>
                    <div className=' relative flex flex-col'>
                        <label htmlFor="Password" className=' text-sm'>Password</label>
                        <input type={type} id='Password' value={userObj.password} onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} required className='focus:outline-[#6A38C2] outline-none w-full py-2 mt-2 pl-2 border-[1px] border-solid rounded' />
                        { !userObj.password ? <button type='button' className='absolute right-2 top-10'>
                            <RiLockPasswordFill />
                        </button> : type==="password" ? <button type='button' className='absolute right-2 top-10' onClick={()=>setType("text")}>
                            <IoEyeOutline />
                        </button> : <button type='button' className='absolute right-2 top-10' onClick={()=>setType("password")}>
                            <IoEyeOffOutline />
                        </button>}
                        {iserror.status && iserror.msg.password && <span className=' text-xs mt-1 text-red-500 font-medium'>{iserror.msg.password}</span>}
                    </div>
                    <div className=' relative flex flex-col w-full'>
                        <label htmlFor="Role" className=' text-sm'>Role</label>
                        <input type="text" id='Role' value={userObj.role} onChange={(e) => setUserObj({ ...userObj, role: e.target.value })} required className='focus:outline-[#6A38C2]  outline-none w-full py-2 mt-2 pl-2 border-[1px] border-solid rounded' />
                        <FaUser className=' absolute right-2 top-10' />
                        {iserror.status && iserror.msg.lastname && <span className=' text-xs mt-1 text-red-500 font-medium'>{iserror.msg.lastname}</span>}
                    </div>
                    <div className=' flex flex-wrap md:flex-nowrap items-center gap-2 w-full'>
                        <div className=' flex flex-col w-full'>
                            <label htmlFor="firstname" className=' text-sm'>First Name</label>
                            <input type="text" id='firstname' value={userObj.firstname} onChange={(e) => setUserObj({ ...userObj, firstname: e.target.value })} required className='focus:outline-[#6A38C2] outline-none w-full py-2 mt-2 pl-2 border-[1px] border-solid rounded' />
                            {iserror.status && iserror.msg.firstname && <span className=' text-xs mt-1 text-red-500 font-medium'>{iserror.msg.firstname}</span>}
                        </div>
                        <div className=' flex flex-col w-full'>
                            <label htmlFor="lastname" className=' text-sm'>Last Name</label>
                            <input type="text" id='lastname' value={userObj.lastname} onChange={(e) => setUserObj({ ...userObj, lastname: e.target.value })} required className='focus:outline-[#6A38C2]  outline-none w-full py-2 mt-2 pl-2 border-[1px] border-solid rounded' />
                            {iserror.status && iserror.msg.lastname && <span className=' text-xs mt-1 text-red-500 font-medium'>{iserror.msg.lastname}</span>}
                        </div>

                    </div>
                    <button type='submit' className='flex justify-center bg-[#6A38C2] hover:bg-[#9867ed] text-white rounded-md py-3'>
                        {isloading ? <ImSpinner8 className='spinner text-xl animate' /> : <p>Sign Up</p>}
                    </button>
                </form>
                <p className='text-sm flex items-center justify-center gap-1'>Already registered? <Link to="/login-user" className=' font-semibold text-[#6A38C2]'>Login</Link></p>
            </div>
        </div>
    )
}

export default Sign