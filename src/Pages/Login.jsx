import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { ImSpinner8 } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { loginuser } from '../redux/user/action';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isloading, iserror, token } = useSelector((state) => state.user)
    const [userObj, setUserObj] = useState({
        email: "", password: ""
    })
    const postdata = (e) => {
        e.preventDefault()
        dispatch(loginuser(userObj))
    }
    useEffect(() => {
        if (iserror.status) {
            toast.error(iserror.msg)
            setTimeout(() => {
                dispatch({
                    type: "clearerror"
                })
            }, 2000);
        }
    }, [iserror])
    useEffect(() => {
        if (token) {
            navigate("/")
        }
    }, [token])
    return (
        <div className='xl:w-[75rem] flex flex-col items-center my-5 md:my-10 px-3  w-full'>
            <div className=' text-center'>
                <h2 className='font-bold text-2xl md:text-4xl tracking-wide leading-9'>Login to Continue</h2>
                <p className=' text-sm text-[#636262] mt-3'>2,00,000+ companies hiring on Talenthunt</p>
            </div>
            <div className='mt-7 w-full  listgrid flex flex-col gap-6 border-[1px] border-solid rounded-xl md:w-[30rem] py-10 px-5'>
                {/* <button className='listgrid font-medium  w-full flex items-center justify-center gap-2 py-3  border-[1px] border-solid rounded-xl '>
                    <FcGoogle />
                    <p>Sign in with Google</p>
                </button> */}
                {/* <div className=' inline-flex items-center justify-center gap-2'>
                    <span className=' w-[44%] h-[1px] bg-black'></span>
                    <span>OR</span>
                    <span className=' w-[44%] h-[1px] bg-black'></span>
                </div> */}
                <form className='flex flex-col gap-6 ' onSubmit={postdata}>
                    <div className=' flex flex-col'>
                        <label htmlFor="email" className=' text-sm'>Email</label>
                        <input type="email" id='email'  required value={userObj.email} onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} className=' focus:outline-[#6A38C2] outline-none w-full py-2 mt-2 pl-2 border-[1px] border-solid rounded' />
                    </div>
                    <div className=' flex flex-col'>
                        <label htmlFor="Password" className=' text-sm'>Password</label>
                        <input type="password" id='Password' required  value={userObj.password} onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} className='focus:outline-[#6A38C2] outline-none w-full py-2 mt-2 pl-2 border-[1px] border-solid rounded' />
                    </div>
                    <button type='submit' className='flex justify-center bg-[#6A38C2] hover:bg-[#9867ed] text-white rounded-md py-3'>
                        {isloading ? <ImSpinner8 className='spinner text-xl animate' /> : <p>Login</p>}
                    </button>
                </form>
                <p className='text-sm flex items-center justify-center gap-1'>New User? <span className=' font-semibold text-[#6A38C2]'>Sign Up</span></p>
                <div className=' text-sm my-5'>
                    <p className=' underline font-medium'>Demo User</p>
                    <p className=' mt-2'>Email : demouser456@gmail.com</p>
                    <p>Password : demouser</p>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default Login
