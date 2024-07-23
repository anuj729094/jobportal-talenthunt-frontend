import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { deletejob, getjobs } from '../redux/Jobs/action';
import JobUpdate from '../Components/JobUpdate';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const PostedJob = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [updatedJob, setUpdateJob] = useState(null)
  const { isloading, companydetails } = useSelector((state) => state.company)
  const { isloadingjobs, jobdata, iserror } = useSelector((state) => state.jobs)
  useEffect(() => {
    if (!isloading) {
      if (companydetails) {
        dispatch(getjobs(companydetails._id))
      }
      else {
        navigate("/user-profile")
      }
    }
  }, [isloading, companydetails])


  useEffect(() => {
    if (iserror.status) {
      toast.error(iserror.msg)
      dispatch({
        type: "clearerror"
      })
    }
  }, [iserror])


  return (
    <div className=' px-4'>
      {isloadingjobs || isloading ? <h1>loading....</h1> :  jobdata && jobdata.length ? <div className='w-full overflow-auto border border-solid rounded-md'>
        <table className='job-posted w-full whitespace-nowrap'>
          <thead className=' bg-[#F1F7F9] text-[#3E555E] text-sm'>
            <tr>
              <th></th>
              <th>Job Profile</th>
              <th>Job Type</th>
              <th>Salary</th>
              <th>WorK Style</th>
              <th>Openings</th>
              <th>Action</th>
              <th>See Applicants</th>
            </tr>
          </thead>
          <tbody className=' text-center text-sm text-[#444448]'>
            {
              jobdata.map((jobitem, index) =>
                <tr key={index} className=' border-b border-solid'>
                  <td>{index + 1}</td>
                  <td>{jobitem.role}</td>
                  <td>{jobitem.jobtype}</td>
                  <td>{jobitem.salary}</td>
                  <td>{jobitem.workstyle}</td>
                  <td>{jobitem.openings}</td>
                  <td className=' text-xl'>
                    <button onClick={() => dispatch(deletejob(jobitem._id))}><MdDelete className=' text-red-600' /></button>
                    <button className='ml-1' onClick={() => setUpdateJob(jobitem)}><MdModeEditOutline className=' text-green-700' /></button>
                  </td>
                  <td><Link to={`/applicants/${jobitem._id}`}>See</Link></td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div> : "No jobs to show"}
     {updatedJob && <JobUpdate updatedJob={updatedJob} setUpdateJob={setUpdateJob} /> }
    </div>
  )

}

export default PostedJob
