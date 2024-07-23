import React, { useEffect, useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { workarr, jobList, jobtype, locationarr, skills } from '../utilis/arr'
import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateJobs } from '../redux/Jobs/action'
import toast, { Toaster } from 'react-hot-toast'
import { ImSpinner8 } from 'react-icons/im'

const JobUpdate = ({ updatedJob, setUpdateJob }) => {
    const dispatch = useDispatch()
    const [obj, setObj] = useState(null)
    const [search, setSearch] = useState("")
    const [skillsArr, setSkillsArr] = useState([])
    const [focusId, setFocusId] = useState({
        role: "", location: "", work: "", jobtype: ""
    })
    const { isloading, msg, iserror } = useSelector((state) => state.jobs)

    useEffect(() => {
        setObj(updatedJob)
    }, [updatedJob])

    useEffect(() => {
        if (search) {
            var timer = setTimeout(() => {
                let regex = RegExp(`${search}`, 'gi')
                setSkillsArr(skills.filter((item) => item.match(regex)))
            }, 2000);
        }
        return () => clearTimeout(timer)
    }, [search])

    const postdata = (e) => {
        e.preventDefault()
        dispatch(updateJobs(obj))
    }
    useEffect(() => {
        if (iserror.status) {
            if (typeof (iserror.msg) !== "object") {
                toast.error(iserror.msg)
                dispatch({
                    type: 'clearerror'
                })
            }
            else {
                setTimeout(() => {
                    dispatch({
                        type: "clearerror"
                    })
                }, 4000);
            }
        }
    }, [iserror])
    
    useEffect(() => {
        if (msg === "updated successfully") {
            setUpdateJob(null)
            dispatch({
                type: 'clearmessage'
            })
        }
    }, [msg])
    return (
        <>
            {obj && <div className=' bg-[#0000004d] fixed z-50 w-full h-full top-0 left-0 overflow-auto flex justify-center px-3 pb-3 '>
                <div className=' mt-20 bg-white w-full md:w-[30rem] rounded-md h-fit flex flex-col items-center pt-10 pb-3'>
                    <div className=' flex justify-end w-full pr-4 text-3xl mb-4'>
                        <button onClick={() => setUpdateJob(null)}><IoCloseSharp /></button>
                    </div>
                    <h1 className=' font-semibold text-lg'>Update Job</h1>
                    <form className=' w-full px-4 md:px-7 flex flex-col items-end gap-5' onSubmit={postdata}>
                        <div className='relative text-sm flex flex-col gap-3 w-full'>
                            <label htmlFor="role" className=' font-medium'>Role</label>
                            <input type="text" id="role" className=' border border-solid outline-none py-3 pl-3 rounded-md focus:outline-[#6D3CC3]' value={obj.role} required readOnly onFocus={() => setFocusId({ ...focusId, role: true })} />
                            {focusId.role && <div className='flex flex-col items-end rounded-md text-sm z-40 absolute top-[6rem] w-full bg-white border-2 border-solid'>
                                <IoCloseSharp className=' cursor-pointer my-2 mr-3 text-2xl' onClick={() => setFocusId({ ...focusId, role: false })} />
                                <ul className='w-full'>
                                    {
                                        jobList.map((jobs, index) =>
                                            <li key={index} onClick={() => setObj({ ...obj, role: jobs })} className=' border-b border-solid py-3 pl-2 hover:bg-[#6D3CC3] hover:text-white'>{jobs}</li>
                                        )
                                    }
                                </ul>

                            </div>}
                        </div>
                        <div className=' text-sm flex flex-col gap-3 w-full'>
                            <label htmlFor="description" className=' font-medium'>Description</label>
                            <textarea id="description" value={obj.description} required onChange={(e) => setObj({ ...obj, description: e.target.value })} rows={7} className=' border border-solid outline-none py-3 pl-3 rounded-md focus:outline-[#6D3CC3]'></textarea>
                            {
                                iserror.status && typeof (iserror.msg) === "object" && iserror.msg.description && <span className=' text-red-600 font-medium'>
                                    {
                                        iserror.msg.description
                                    }
                                </span>
                            }
                        </div>
                        <div className=' flex flex-col gap-3 mt-5 w-full'>
                            <label htmlFor="" className=' font-semibold text-sm'>Skills Required</label>
                            <div className='relative text-sm border-2 border-solid rounded-md focus:outline-[#6D3CC3]'>
                              {obj.skills.length ?  <ul className='whitespace-nowrap inline-flex flex-wrap'>
                                    {
                                        obj.skills.map((itemarr, index) =>
                                            <li key={index} className=' px-3 bg-[#6D3CC3] flex items-center flex-wrap gap-1 text-white rounded-md text-center py-4 m-2' >
                                                {itemarr}
                                                <button type="button" className=' text-2xl' onClick={() =>
                                                    setObj({ ...obj, skills: obj.skills.filter((jobs) => jobs !== itemarr) })
                                                }><IoCloseSharp /></button>
                                            </li>
                                        )
                                    }
                                </ul> :null}
                                <div className=''>
                                    <input type="text" className=' border-0 outline-none py-4 pl-2 w-full' placeholder='e.g. React JS' onChange={(e) => setSearch(e.target.value)} />
                                </div>
                                {skillsArr.length ? <div className=' absolute z-40 border border-solid text-sm bg-white rounded-md w-full mt-3 '>
                                    <ul>
                                        {
                                            skillsArr.filter(function (skill) {
                                                if (!obj.skills.find((itemsarr) => itemsarr === skill)) {
                                                    return skill
                                                }
                                            }).map((itemdata, index) =>
                                                <li key={index} onClick={() =>
                                                    setObj({ ...obj, skills: [...obj.skills, itemdata] })
                                                }
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
                        <div className='grid grid-cols-2 gap-5 w-full'>
                            <div className='relative text-sm flex flex-col gap-3'>
                                <label htmlFor="Location" className=' font-medium'>Location</label>
                                <input type="text" id="Location" className=' border border-solid outline-none py-3 pl-3 rounded-md focus:outline-[#6D3CC3]' required value={obj.location} readOnly onFocus={() => setFocusId({ ...focusId, location: true })} />
                                {focusId.location && <div className='flex flex-col items-end  rounded-md text-sm z-40 absolute top-[6rem] w-full bg-white border-2 border-solid'>
                                    <IoCloseSharp className=' cursor-pointer my-2 mr-3 text-2xl' onClick={() => setFocusId({ ...focusId, location: false })} />
                                    <ul className='w-full max-h-[15rem] overflow-auto'>
                                        {
                                            locationarr.map((location, index) =>
                                                <li key={index} onClick={() => setObj({ ...obj, location: location })} className=' border-b border-solid py-3 pl-2 hover:bg-[#6D3CC3] hover:text-white'>{location}</li>
                                            )
                                        }
                                    </ul>
                                </div>}
                            </div>
                            <div className=' text-sm flex flex-col gap-3'>
                                <label htmlFor="Salary" className=' font-medium'>Salary</label>
                                <input type="text" id="Salary" required value={obj.salary} onChange={(e) => setObj({ ...obj, salary: e.target.value })} className=' border border-solid outline-none py-3 pl-3 rounded-md focus:outline-[#6D3CC3]' />
                            </div>
                            <div className=' relative text-sm flex flex-col gap-3'>
                                <label htmlFor="jobtype" className=' font-medium'>Job Type</label>
                                <input type="text" id="jobtype" required className=' border border-solid outline-none py-3 pl-3 rounded-md focus:outline-[#6D3CC3]' value={obj.jobtype} readOnly onFocus={() => setFocusId({ ...focusId, jobtype: true })} />
                                {focusId.jobtype && <div className='flex flex-col items-end rounded-md text-sm  absolute top-[6rem] w-full bg-white border-2 border-solid'>
                                    <IoCloseSharp className=' cursor-pointer my-2 mr-3 text-2xl' onClick={() => setFocusId({ ...focusId, jobtype: false })} />
                                    <ul className='w-full'>
                                        {
                                            jobtype.map((job, index) =>
                                                <li key={index} onClick={() => setObj({ ...obj, jobtype: job })} className=' border-b border-solid py-3 pl-2 hover:bg-[#6D3CC3] hover:text-white'>{job}</li>
                                            )
                                        }
                                    </ul>
                                </div>}
                            </div>
                            <div className=' relative text-sm flex flex-col gap-3'>
                                <label htmlFor="workstyle" className=' font-medium'>Work Style</label>
                                <input type="text" id="workstyle" required value={obj.workstyle} readOnly className=' border border-solid outline-none py-3 pl-3 rounded-md focus:outline-[#6D3CC3]' onFocus={() => setFocusId({ ...focusId, work: true })} />
                                {focusId.work && <div className='flex flex-col items-end rounded-md text-sm z-40 absolute top-[6rem] w-full bg-white border-2 border-solid'>
                                    <IoCloseSharp className=' cursor-pointer my-2 mr-3 text-2xl' onClick={() => setFocusId({ ...focusId, work: false })} />
                                    <ul className='w-full'>
                                        {
                                            workarr.map((work, index) =>
                                                <li key={index} onClick={() => setObj({ ...obj, workstyle: work })} className=' border-b border-solid py-3 pl-2 hover:bg-[#6D3CC3] hover:text-white'>{work}</li>
                                            )
                                        }
                                    </ul>
                                </div>}
                            </div>
                            <div className=' text-sm flex flex-col gap-3'>
                                <label htmlFor="openings" className=' font-medium'>No. of Openings</label>
                                <input type="text" id="openings" required value={obj.openings} onChange={(e) => setObj({ ...obj, openings: e.target.value })} className=' border border-solid outline-none py-3 pl-3 rounded-md focus:outline-[#6D3CC3]' />
                            </div>
                        </div>
                        <button type='submit' className=' bg-[#6D3CC3] text-white text-sm py-4 px-5 rounded-md'>
                            {
                                isloading ? <ImSpinner8 /> : "Submit"
                            }
                        </button>
                    </form>
                </div>
                <Toaster />
            </div>}
        </>

    )
}

export default memo(JobUpdate)
