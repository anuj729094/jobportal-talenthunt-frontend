import React, { useEffect, useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { IoCloseSharp } from "react-icons/io5";

const Nav = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userdata } = useSelector((state) => state.user)
  const [show, setShow] = useState(false)
  const [nav, setNav] = useState(true)
  useEffect(()=>{
    window.innerWidth<768 && setNav(false)
  },[])
  return (
    <div className=' sticky z-50 top-0 bg-white py-5 flex items-center justify-between px-3 xl:px-0'>
      <div className='logo'>
        <p className=' italic font-semibold text-2xl md:text-3xl text-[#6D3CC3]'>
          Talent<span className=' text-[#FA500A]'>hunt</span>
        </p>
      </div>
      {nav && <div className=' absolute py-4 pl-3  bg-white rounded-lg md:rounded-none pr-7 md:pl-0 md:pr-0 md:py-0 top-14   right-4 md:bg-transparent md:static nav-tabs text-[#5D5D5D] flex  flex-col md:flex-row md:items-center gap-5'>
        <ul className=' flex flex-col items-start md:flex-row md:items-center text-sm gap-4 md:gap-10'>
          <li className=' relative'><Link to="/">Home</Link>
            {location.pathname === "/" && <div className=' absolute bg-[#6D3CC3] h-1 top-5 w-full '></div>}
          </li>
          {userdata && <li className=' relative'><Link to="/posted-jobs">Jobs Posted</Link>
            {location.pathname === "/posted-jobs" && <div className=' absolute bg-[#6D3CC3] h-1 top-5 w-full '></div>}
          </li>}
          {userdata && <li className=' relative'><Link to="/post-job">Post Job</Link>
            {location.pathname === "/post-job" && <div className=' absolute bg-[#6D3CC3] h-1 top-5 w-full '></div>}
          </li>}
        </ul>
        {!userdata ? <ul className='flex flex-col md:flex-row md:items-center gap-3 text-sm '>
          <li>
            <Link to="/login-user" className=' border border-solid rounded-md py-2 font-semibold px-4 border-black'>Login</Link>
          </li>
          <li className=' my-4'>
            <Link to="/register-user" className=' bg-[#6A38C2] text-white py-[0.65rem] my-4 px-4 rounded-md'>Register</Link>
          </li>
        </ul> :
          <div className=' relative user-data flex  flex-col   items-start gap-1'>
            <div className=' flex items-center gap-1 cursor-pointer' onClick={() => show ? setShow(false) : setShow(true)}>
              <p className=' border-[1px] font-bold border-black rounded-full w-8 h-8 flex items-center justify-center'>{userdata.firstname[0].toUpperCase()}</p>
              <IoIosArrowDown style={show ? { rotate: "0deg", transition: "0.5s" } : { rotate: "-90deg", transition: "0.5s" }} />
            </div>
            {show && <div className=' md:absolute border border-solid   bg-transparent md:bg-white top-12 right-2 rounded-lg'>
              <div className='py-3 pl-4 pr-6  border-b-[1px] border-solid'>
                <h2 className=' font-medium'>{userdata.firstname} {userdata.lastname}</h2>
                <p className=' text-sm'>{userdata.email}</p>
              </div>
              <ul className=' text-sm flex flex-col gap-4 pl-4 my-5'>
                <Link to='/user-profile'><li>Profile</li></Link>
                <li>
                  <button onClick={() => {
                    localStorage.removeItem("token")
                    dispatch({
                      type: "clearuserdata"
                    })
                    navigate("/")
                  }} >Logout</button>
                </li>
              </ul>
            </div>}
          </div>}
      </div>}
      <button className=' md:hidden' onClick={() => nav ? setNav(false) : setNav(true)}>
        {
          nav ? <IoCloseSharp className='text-xl' /> : <RiMenu3Fill className='text-xl' />
        }
      </button>
    </div>
  )
}

export default Nav
