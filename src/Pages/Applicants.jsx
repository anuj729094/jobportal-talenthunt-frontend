import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getapplicants } from '../redux/Jobs/action'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { FiEdit2 } from "react-icons/fi";

const Applicants = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isloading, applicants, iserror } = useSelector((state) => state.jobs)
    const [arr, setArr] = useState([])
    const { id } = useParams()
    useEffect(() => {
        dispatch(getapplicants(id))
    }, [id])

    const func = (item) => {
        let count = 0
        item.jobid.skills.forEach((skills) => {
            if (item.studentid.skills.find((studentskill) => studentskill === skills)) {
                count++
            }
        })
        return count
    }
    useEffect(() => {
        if (!isloading && applicants.length) {
            setArr(
                applicants.map(function (item) {
                    return {
                        ...item, skillmatch: func(item)
                    }
                })
            )
        }
    }, [isloading, applicants])

    useEffect(() => {
        if (iserror.status) {
          toast.error(iserror.msg)
          dispatch({
            type: "clearerror"
          })
        }
      }, [iserror])
    return (
        <div className=' px-2'>
            {isloading ? <h1>loading...</h1> : arr.length ? <div className=' overflow-auto'>
                <table className=' w-full whitespace-nowrap border border-solid rounded-md'>
                    <thead className='bg-[#F1F7F9] text-[#3E555E] '>
                        <tr>
                            <th></th>
                            <th>Full Name</th>
                            <th>Phone No.</th>
                            <th>Email</th>
                            <th>Github</th>
                            <th>Skills Match</th>
                            <th>Status</th>
                            <th>View Profile</th>
                        </tr>
                    </thead>
                    <tbody className=' text-center text-sm text-[#444448]'>
                        {
                            arr.map((item, index) =>
                                <tr key={index} className=' border-b border-solid'>
                                    <td>{index + 1}</td>
                                    <td>{item.studentid.fullname} {item.studentid.lastname}</td>
                                    <td>{item.studentid.phone}</td>
                                    <td>{item.studentid.email}</td>
                                    <td><a target="_blank" href={item.studentid.github}>URL</a></td>
                                    <td>{item.skillmatch}/{item.jobid.skills.length}</td>
                                    <td>{item.Status}</td>
                                    <td className=' cursor-pointer' onClick={()=>navigate(`/applicant-info/applicantid/${item._id}` , {state:{...item.studentid , Status:item.Status}})}>Profile</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div> : "No applicants to show"}
        </div>
    )
}

export default Applicants
