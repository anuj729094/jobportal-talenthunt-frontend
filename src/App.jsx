import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Sign from './Pages/Sign'
import Login from './Pages/Login'
import { useDispatch, useSelector } from 'react-redux'
import { getuser } from './redux/user/action'
import { useEffect } from 'react'
import PostedJob from './Pages/PostedJob'
import Postajob from './Pages/Postajob'
import Protected from './Components/Protected'
import Profle from './Pages/Profle'
import toast, { Toaster } from 'react-hot-toast'
import { getcompanydetails } from './redux/company/action'
import Parent from './Components/Parent'
import Applicants from './Pages/Applicants'
import ApplicantInfo from './Pages/ApplicantInfo'

function App() {
  const { isloadinguser, token, iserroruser, userdata } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getuser(token || localStorage.getItem("token")))
  }, [token])
  useEffect(() => {
    userdata && dispatch(getcompanydetails())
  }, [userdata])
  useEffect(() => {
    if (iserroruser.status) {
      iserroruser.msg === "Session Expired" && toast.error(iserroruser.msg)
      dispatch({
        type: "clearerroruser"
      })
    }
  }, [iserroruser])
  if (isloadinguser) {
    return <h1>loading....</h1>
  }
  return (

    <div className='xl:flex xl:justify-center'>
      <div className=' xl:w-[75rem]'>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register-user" element={<Sign />} />
            <Route path="/login-user" element={<Login />} />
            <Route element={<Protected />}>
              <Route path="/posted-jobs" element={<PostedJob />} />
              <Route path="/post-job" element={<Postajob />} />
              <Route path="/user-profile" element={<Profle />} />
              <Route path="/applicants/:id" element={<Applicants />} />
              <Route path="/applicants/:id" element={<Applicants />} />
              <Route path="/applicant-info/applicantid/:id" element={<ApplicantInfo />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </div>
      <Toaster />
    </div>
  )
}

export default App
