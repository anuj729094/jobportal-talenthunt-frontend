export const postjobs = (job) => async (dispatch) => {
    try {
        dispatch({
            type: "addjobspending"
        })
        const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/job`, {
            method: "POST",
            headers: {
                token: localStorage.getItem("token"),
                "Content-type": "application/json"
            },
            body: JSON.stringify({ jobs: job })
        })
        const res = await data.json()
        if (res.status) {
            dispatch({
                type: "addjobssuccess",
                payload: res.msg
            })
        }
        else {
            dispatch({
                type: "addjobserror",
                payload: {
                    status: true,
                    msg: res.error
                }
            })
        }
    } catch (error) {
        dispatch({
            type: "addjobserror",
            payload: {
                status: true,
                msg: error.message
            }
        })
    }
}


export const getjobs = (companyid) => async (dispatch) => {
    try {
        dispatch({
            type: "getjobspending"
        })
        const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/getalljobs/${companyid}`, {
            method: "GET",
            headers: {
                token: localStorage.getItem("token"),
                "Content-type": "application/json",
                Accept: "application/json"
            }
        })
        const res = await data.json()
        if (res.status) {
            dispatch({
                type: "getjobssuccess",
                payload: res.jobarr
            })
        }
        else {
           throw new Error(res.error)
        }
    } catch (error) {
        dispatch({
            type: "getjobserror",
            payload:{
                status:true,
                msg:error.message
            }
        })
    }
}


export const deletejob = (jobid) => async (dispatch) => {
    try {
        dispatch({
            type: "deletejobspending"
        })
        const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/deletejob/${jobid}`, {
            method: "DELETE",
            headers: {
                token: localStorage.getItem("token"),
                "Content-type": "application/json",
                Accept: "application/json"
            }
        })
        const res = await data.json()
        if (res.status) {
            dispatch({
                type: "deletejobssuccess",
                payload: res.deletedjob
            })
        }
        else {
           throw new Error(res.error)
        }
    } catch (error) {
        dispatch({
            type: "deletejobserror",
            payload:{
                status:true,
                msg:error.message
            }
        })
    }
}


export const updateJobs = (jobdata) => async (dispatch) => {
    try {
        dispatch({
            type: "updatejobspending"
        })
        const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/updatejob/${jobdata._id}`, {
            method: "PUT",
            headers: {
                token: localStorage.getItem("token"),
                "Content-type": "application/json",
                Accept: "application/json"
            },
            body:JSON.stringify(jobdata)
        })
        const res = await data.json()
        if (res.status) {
            dispatch({
                type: "updatejobssuccess",
                payload: [res.msg, res.updatejob]
            })
        }
        else {
            dispatch({
                type: "updatejobserror",
                payload:{
                    status:true,
                    msg:res.error
                }
            })
        }
    } catch (error) {
        dispatch({
            type: "updatejobserror",
            payload:{
                status:true,
                msg:error.message
            }
        })
    }
}


export const getapplicants = (id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"getapplicantspending"
        })
        const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/applicants/${id}` , {
            method:"GET",
            headers:{
                token:localStorage.getItem("token"),
                "Content-type":"application/json",
                Accept:"application/json"
            }
        })
        const res = await data.json()
        if(res.status){
            dispatch({
                type:"getapplicantsuccess",
                payload:res.applicants
            })
        }
        else{
            throw new Error(res.error)
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type:"getapplicanterror",
            payload:{
                status:true,
                msg:error.message
            }
        })
    }
}

export const updateapplicant = (applieddata)=>async(dispatch)=>{
    try {
        dispatch({
            type:"updateapplicantpending"
        })
        const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/applicants/${applieddata[0].id}` , {
            method:"PUT",
            headers:{
                token:localStorage.getItem("token"),
                "Content-type":"application/json"
            },
            body:JSON.stringify(applieddata[1])
        })
        const res = await data.json()
        if(res.status){
            dispatch({
                type:"updateapplicantsuccess",
                payload:res.updated.Status
            })
        }
        else{
            throw new Error(res.error)
        }
    } catch (error) {
        dispatch({
            type:"updateapplicanterror",
            payload:{
                status:true,
                msg:error.message
            }
        })
    }
}