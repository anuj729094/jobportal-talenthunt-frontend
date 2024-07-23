import React, { useEffect, useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md';
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { postjobs } from '../redux/Jobs/action';
import toast, { Toaster } from 'react-hot-toast';
import { ImSpinner8 } from 'react-icons/im';
import { workarr, jobList, jobtype, locationarr, skills } from '../utilis/arr'
import { Navigate, useNavigate } from 'react-router-dom';
import CompanyDetails from '../Components/CompanyDetails';

const Postajob = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isloading: isloadingcompany, companydetails } = useSelector((state) => state.company)
  const [search, setSearch] = useState({
    text: "", formid: ""
  })
  const [skillsarr, setSkillsArr] = useState([])
  // useEffect(() => {
  //   if (!isloadingcompany) {
  //     if (companydetails) {
  //       console.log(companydetails);
  //     }
  //     else {
  //       navigate("/user-profile")
  //     }
  //   }
  // }, [isloadingcompany, companydetails])
  const [arr, setArr] = useState([])
  useEffect(() => {
    if (search.text) {
      var timer = setTimeout(() => {
        let regex = RegExp(`${search.text}`, "gi")
        setSkillsArr(skills.filter((item) => item.match(regex)))
      }, 2000);
    }
    return () => clearTimeout(timer)
  }, [search])
  useEffect(() => {
    if (!isloadingcompany) {
      if (companydetails) {
        setArr([
          {
            companyid: companydetails && companydetails._id,
            id: String(Math.random() * 10000).split(".")[0],
            role: "",
            location: "",
            workstyle: "",
            skills: [],
            jobtype: "",
            description: "",
            salary: "",
            openings: ""
          }
        ])
      }
      else {
        navigate("/user-profile")
      }
    }
  }, [isloadingcompany, companydetails])
  const [id, setId] = useState(companydetails && arr[0]?.id || null)
  const { isloading, iserror, msg } = useSelector((state) => state.jobs)
  const [focusId, setFocusId] = useState({
    role: "", location: "", work: "", jobtype: ""
  })

  const handlejobs = (e) => {
    e.preventDefault()
    dispatch(postjobs(arr))
  }

  useEffect(() => {
    if (iserror.status) {
      if (typeof (iserror.msg) !== "object") {
        toast.error(iserror.msg)
        dispatch({
          type: "clearerror"
        })
      }
    }
  }, [iserror])

  useEffect(() => {
    if (msg === "jobs posted successfully") {
      setArr([{
        companyid: companydetails && companydetails._id,
        id: String(Math.random() * 10000).split(".")[0],
        role: "",
        location: "",
        workstyle: "",
        jobtype: "",
        skills: [],
        description: "",
        salary: "",
        openings: ""

      }])
      toast.success(msg)
      dispatch({
        type: "clearerror"
      })
      dispatch({
        type: "clearmessage"
      })
    }
  }, [msg])

  return (
    <div className=' px-2 flex justify-center'>
      <div className=' flex flex-col gap-4 items-end w-full sm:w-[30rem] '>
        <button className=' text-4xl' onClick={() => setArr([...arr, {
          companyid: companydetails && companydetails._id,
          id: String(Math.random() * 10000).split(".")[0],
          role: "",
          location: "",
          workstyle: "",
          jobtype: "",
          skills: [],
          description: "",
          salary: "",
          openings: ""
        }])}>+</button>
        <form className=' flex flex-col items-end gap-7  w-full ' onSubmit={handlejobs}>
          {
            arr.map((item, index) =>
              <div key={index} className=' border border-solid py-7 px-4 rounded-md  w-full'>
                <div className='flex items-center justify-end text-2xl gap-3'>
                  <button type='button' onClick={() => id === item.id ? setId(null) : setId(item.id)}><IoIosArrowDown style={id === item.id ? { rotate: "0deg", transition: "0.5s" } : { rotate: "180deg", transition: "0.5s" }} /></button>
                  <button type='button' onClick={() => setArr(arr.filter((job) => job.id !== item.id))}><MdDeleteOutline /></button>
                </div>
                <div className='relative flex flex-col gap-3'>
                  <label htmlFor={`role${item.id}`} className=' font-semibold text-sm'>Job Role</label>
                  <input type="text" id={`role${item.id}`} required value={item.role} readOnly onFocus={() => setFocusId({ ...focusId, role: item.id })} className='text-sm border-2 border-solid py-4 pl-3 rounded-md focus:outline-[#6D3CC3]' placeholder='e.g. Full Stack developer' />
                  {focusId.role === item.id && <div className=' flex flex-col items-end rounded-md text-sm z-40 absolute top-[6rem] w-full bg-white border-2 border-solid'>
                    <IoCloseSharp onClick={() => setFocusId({ ...focusId, role: "" })} className=' cursor-pointer my-2 mr-3 text-2xl' />
                    <ul className='w-full'>
                      {
                        jobList.map((jobs, index) =>
                          <li key={index} className=' border-b border-solid py-3 pl-2 hover:bg-[#6D3CC3] hover:text-white' onClick={() => setArr(arr.map((jobitem) => jobitem.id === item.id ? { ...jobitem, role: jobs } : jobitem))}>{jobs}</li>
                        )
                      }
                    </ul>
                  </div>}
                  {
                    iserror.status && typeof (iserror.msg) === "object" && iserror.msg.find((item) => item.path === `jobs[${index}].role`) && <span className=' text-red-600 text-sm'>Required</span>
                  }
                </div>
                {id === item.id && <div>
                  <div className=' flex flex-col gap-3 mt-5'>
                    <label htmlFor={`description${item.id}`} className=' font-semibold text-sm'>Job Description</label>
                    <textarea id={`description${item.id}`} value={item.description} onChange={(e) => setArr(arr.map((jobitem) => jobitem.id === item.id ? { ...jobitem, description: e.target.value } : jobitem))} rows={10} className='text-sm border-2 border-solid py-4 px-3 rounded-md focus:outline-[#6D3CC3]' placeholder='Create interactive web applications using React JS.'></textarea>
                    {
                      iserror.status && typeof (iserror.msg) === "object" && iserror.msg.find((item) => item.path === `jobs[${index}].description`) && <span className=' text-red-600 text-sm'>{iserror.msg.find((item) => item.path === `jobs[${index}].description`).msg}</span>
                    }
                  </div>
                  <div className=' flex flex-col gap-3 mt-5'>
                    <label htmlFor="" className=' font-semibold text-sm'>Skills Required</label>
                    <div className='relative text-sm border-2 border-solid rounded-md focus:outline-[#6D3CC3]'>
                      <ul className=' grid grid-cols-2 sm:grid-cols-3'>
                        {
                          item.skills.map((itemarr, index) =>
                            <li key={index} className=' bg-[#6D3CC3] flex items-center  justify-center gap-1 text-white rounded-md text-center py-4 m-2' >
                              {itemarr}
                              <button type="button" className=' text-2xl' onClick={() =>
                                setArr(arr.map(function (jobinfo) {
                                  if (jobinfo.id === item.id) {
                                    return {
                                      ...item, skills: item.skills.filter((jobdata) => jobdata !== itemarr)
                                    }
                                  }
                                  return jobinfo
                                })
                                )} ><IoCloseSharp /></button>
                            </li>
                          )
                        }
                        <li className=' col-span-2 sm:col-span-3'>
                          <input type="text" className=' border-0 outline-none py-4 pl-2 w-full' placeholder='e.g. React JS' onChange={(e) => setSearch({ text: e.target.value, formid: item.id })} />
                        </li>
                      </ul>
                      {search.formid === item.id && skillsarr.length ? <div className=' absolute z-40 border border-solid text-sm bg-white rounded-md w-full mt-3 '>
                        <ul>
                          {
                            skillsarr.filter(function (skill) {
                              if (!item.skills.find((itemsarr) => itemsarr === skill)) {
                                return skill
                              }
                            }).map((itemdata, index) =>
                              <li key={index} onClick={() =>
                                setArr(arr.map(function (jobinfo) {
                                  if (jobinfo.id === item.id) {
                                    return {
                                      ...item, skills: [...item.skills, itemdata]
                                    }
                                  }
                                  return jobinfo
                                })
                                )}
                                className=' hover:bg-[#6D3CC3] cursor-pointer hover:text-white py-3 pl-2 border-b border-solid'>{itemdata}</li>
                            )
                          }
                        </ul>
                      </div> : null}
                    </div>
                    {
                      iserror.status && typeof (iserror.msg) === "object" && iserror.msg.find((item) => item.path === `jobs[${index}].description`) && <span className=' text-red-600 text-sm'>{iserror.msg.find((item) => item.path === `jobs[${index}].description`).msg}</span>
                    }
                  </div>
                  <div className='mt-7 grid grid-cols-2 gap-6'>
                    <div className='relative flex flex-col gap-3'>
                      <label htmlFor={`location${item.id}`} className=' font-semibold text-sm'>Job Location</label>
                      <input type="text" id={`location${item.id}`} value={item.location} readOnly onFocus={() => setFocusId({ ...focusId, location: item.id })} className='text-sm border-2 border-solid py-4 pl-3 rounded-md focus:outline-[#6D3CC3]' placeholder='e.g. Delhi' />
                      {focusId.location === item.id && <div className=' flex flex-col items-end rounded-md text-sm z-40 absolute top-[6rem] w-full bg-white border-2 border-solid'>
                        <IoCloseSharp onClick={() => setFocusId({ ...focusId, location: "" })} className=' cursor-pointer my-2 mr-3 text-2xl' />
                        <ul className='w-full max-h-[15rem] overflow-auto'>
                          {
                            locationarr.map((location, index) =>
                              <li key={index} className=' border-b border-solid py-3 pl-2 hover:bg-[#6D3CC3] hover:text-white' onClick={() => setArr(arr.map((jobitem) => jobitem.id === item.id ? { ...jobitem, location: location } : jobitem))}>{location}</li>
                            )
                          }
                        </ul>
                      </div>}
                      {
                        iserror.status && typeof (iserror.msg) === "object" && iserror.msg.find((item) => item.path === `jobs[${index}].location`) && <span className=' text-red-600 text-sm'>Required</span>
                      }
                    </div>
                    <div className=' flex flex-col gap-3'>
                      <label htmlFor={`salary${item.id}`} className=' font-semibold text-sm'>Salary</label>
                      <input type="text" id={`salary${item.id}`} value={item.salary} onChange={(e) => setArr(arr.map((jobitem) => jobitem.id === item.id ? { ...jobitem, salary: e.target.value } : jobitem))} className='text-sm border-2 border-solid py-4 pl-3 rounded-md focus:outline-[#6D3CC3]' placeholder='e.g. 10,000' />
                      {
                        iserror.status && typeof (iserror.msg) === "object" && iserror.msg.find((item) => item.path === `jobs[${index}].salary`) && <span className=' text-red-600 text-sm'>{iserror.msg.find((item) => item.path === `jobs[${index}].salary`).msg}</span>
                      }
                    </div>
                    <div className=' relative flex flex-col gap-3'>
                      <label htmlFor={`jobtype${item.id}`} className=' font-semibold text-sm'>Job Type</label>
                      <input type="text" id={`jobtype${item.id}`} value={item.jobtype} readOnly onFocus={() => setFocusId({ ...focusId, jobtype: item.id })} className='text-sm border-2 border-solid py-4 pl-3 rounded-md focus:outline-[#6D3CC3]' placeholder='e.g. Full Time' />
                      {
                        iserror.status && typeof (iserror.msg) === "object" && iserror.msg.find((item) => item.path === `jobs[${index}].jobtype`) && <span className=' text-red-600 text-sm'>Required</span>
                      }
                      {focusId.jobtype === item.id && <div className=' flex flex-col items-end rounded-md text-sm z-20 absolute top-[6rem] w-full bg-white border-2 border-solid'>
                        <IoCloseSharp onClick={() => setFocusId({ ...focusId, jobtype: "" })} className=' cursor-pointer my-2 mr-3 text-2xl' />
                        <ul className='w-full max-h-[15rem] overflow-auto'>
                          {
                            jobtype.map((job, index) =>
                              <li key={index} className=' border-b border-solid py-3 pl-2 hover:bg-[#6D3CC3] hover:text-white' onClick={() => setArr(arr.map((jobitem) => jobitem.id === item.id ? { ...jobitem, jobtype: job } : jobitem))}>{job}</li>
                            )
                          }
                        </ul>
                      </div>}
                    </div>
                    <div className='relative flex flex-col gap-3'>
                      <label htmlFor={`workstyle${item.id}`} className=' font-semibold text-sm'>Work Style</label>
                      <input type="text" id={`workstyle${item.id}`} value={item.workstyle} readOnly onFocus={() => setFocusId({ ...focusId, work: item.id })} className='text-sm border-2 border-solid py-4 pl-3 rounded-md focus:outline-[#6D3CC3]' placeholder='e.g. Onsite' />
                      {
                        iserror.status && typeof (iserror.msg) === "object" && iserror.msg.find((item) => item.path === `jobs[${index}].role`) && <span className=' text-red-600 text-sm'>Required</span>
                      }
                      {focusId.work === item.id && <div className=' flex flex-col items-end rounded-md text-sm z-40 absolute top-[6rem] w-full bg-white border-2 border-solid'>
                        <IoCloseSharp onClick={() => setFocusId({ ...focusId, work: "" })} className=' cursor-pointer my-2 mr-3 text-2xl' />
                        <ul className='w-full max-h-[15rem] overflow-auto'>
                          {
                            workarr.map((work, index) =>
                              <li key={index} className=' border-b border-solid py-3 pl-2 hover:bg-[#6D3CC3] hover:text-white' onClick={() => setArr(arr.map((jobitem) => jobitem.id === item.id ? { ...jobitem, workstyle: work } : jobitem))}>{work}</li>
                            )
                          }
                        </ul>
                      </div>}
                    </div>
                    <div className='relative flex flex-col gap-3'>
                      <label htmlFor={`openings${item.id}`} className=' font-semibold text-sm'>No. of Openings</label>
                      <input type="text" id={`openings${item.id}`} value={item.openings} onChange={(e) => setArr(arr.map((jobitem) => jobitem.id === item.id ? { ...jobitem, openings: e.target.value } : jobitem))} className='text-sm border-2 border-solid py-4 pl-3 rounded-md focus:outline-[#6D3CC3]' placeholder='e.g. 4' />
                      {
                        iserror.status && typeof (iserror.msg) === "object" && iserror.msg.find((item) => item.path === `jobs[${index}].openings`) && <span className=' text-red-600 text-sm'>{iserror.msg.find((item) => item.path === `jobs[${index}].openings`).msg}</span>
                      }
                    </div>
                  </div>
                </div>}
              </div>
            )
          }
        {arr.length ?  <button type='submit' className=' text-white bg-[#6D3CC3] text-sm py-3 px-4 rounded-md'>
            {
              isloading ? <ImSpinner8 className='animate' /> : "Post Jobs"
            }
          </button> :null }
        </form>
      </div>
      <Toaster />
    </div>
  )
}


export default Postajob

