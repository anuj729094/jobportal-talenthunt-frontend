export const addcompanydetails = (companydata)=>async(dispatch)=>{
    try {
        dispatch({
            type:"addcompanyloading"
        })
        const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/details` , {
            method:"POST",
            headers:{
                token:localStorage.getItem("token"),
                "Content-type":"application/json"
            },
            body:JSON.stringify(companydata)
        })
        const res = await data.json()
        if(res.status){
            dispatch({
                type:"addcompanysuccess",
                payload:[res.msg , res.company]
            })
        }
        else{
            dispatch({
                type:"addcompanyerror",
                payload:{
                    status:true,
                    msg:res.error
                }
            })
        }
    } catch (error) {
        dispatch({
            type:"addcompanyerror",
            payload:{
                status:true,
                msg:error.message
            }
        })
    }
}

export const getcompanydetails = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"getcompanyloading"
        })
        const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/getcompany` , {
            method:"GET",
            headers:{
                token:localStorage.getItem("token"),
                "Content-type":"application/json"
            },
        })
        const res = await data.json()
        if(res.status){
            dispatch({
                type:"getcompanysuccess",
                payload:res.company
            })
        }
        else{
            dispatch({
                type:"getcompanyerror",
                payload:{
                    status:true,
                    msg:res.error
                }
            })
        }
    } catch (error) {
        dispatch({
            type:"getcompanyerror",
            payload:{
                status:true,
                msg:error.message
            }
        })
    }
}

