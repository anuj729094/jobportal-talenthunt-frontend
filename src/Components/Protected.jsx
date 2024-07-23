import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Protected = () => {
    const {userdata,isloadinguser} = useSelector((state)=>state.user)
    if(!isloadinguser && userdata &&  localStorage.getItem("token")){
        return <Outlet/>
    }
    return <Navigate to="/login-user"/>
}

export default Protected
