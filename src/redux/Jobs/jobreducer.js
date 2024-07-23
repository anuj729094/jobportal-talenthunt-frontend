import { createReducer } from "@reduxjs/toolkit";

const initialstates = {
    jobdata:null,
    msg:null,
    applicants:[],
    Status:null,
    isloading:false,
    isloadingjobs:true,
    iserror:{
        status:false,
        msg:null
    }
}

export const jobReducer = createReducer(initialstates , (builder)=>{
    builder.addCase("addjobspending" , (state)=>{
        state.isloading=true
    })
    builder.addCase("addjobssuccess" , (state,action)=>{
        state.isloading=false,
        state.msg=action.payload
    })
    builder.addCase("addjobserror" , (state,action)=>{
        state.isloading=false,
        state.iserror=action.payload
    })
    builder.addCase("getjobspending" , (state)=>{
        state.isloadingjobs=true
    })
    builder.addCase("getjobssuccess" , (state,action)=>{
        state.isloadingjobs=false,
        state.jobdata=action.payload
    })
    builder.addCase("getjobserror" , (state,action)=>{
        state.isloadingjobs=false,
        state.iserror=action.payload
    })
    builder.addCase("deletejobspending" , (state)=>{
        state.isloadingjobs=false
    })
    builder.addCase("deletejobssuccess" , (state,action)=>{
        state.isloading=false,
        state.jobdata=[...state.jobdata.filter((jobitem)=>jobitem._id!==action.payload._id)]
    })
    builder.addCase("deletejobserror" , (state,action)=>{
        state.isloading=false,
        state.iserror=action.payload
    })
    builder.addCase("updatejobspending" , (state)=>{
        state.isloading=true
    })
    builder.addCase("updatejobssuccess" , (state,action)=>{
        state.isloading=false,
        state.jobdata=[...state.jobdata.map((jobitem)=>jobitem._id===action.payload[1]._id ? action.payload[1] : jobitem)]
        state.msg=action.payload[0]
    })
    builder.addCase("updatejobserror" , (state,action)=>{
        state.isloading=false,
        state.iserror=action.payload
    })
    builder.addCase("getapplicantspending" , (state)=>{
        state.isloading=true
    })
    builder.addCase("getapplicantsuccess" , (state,action)=>{
        state.isloading=false,
        state.applicants=action.payload
    })
    builder.addCase("getapplicanterror" , (state,action)=>{
        state.isloading=false,
        state.iserror=action.payload
    })
    builder.addCase("updateapplicantpending" , (state)=>{
        state.isloading=true
    })
    builder.addCase("updateapplicantsuccess" , (state,action)=>{
        state.isloading=false,
        state.Status=action.payload
    })
    builder.addCase("updateapplicanterror" , (state,action)=>{
        state.isloading=false,
        state.iserror=action.payload
    })
    builder.addCase("clearmessage", (state) => {
        state.msg=null
    })
    
    builder.addCase("clearerror", (state) => {
        state.iserror={
            status:false,
            msg:null
        }
    })
})
