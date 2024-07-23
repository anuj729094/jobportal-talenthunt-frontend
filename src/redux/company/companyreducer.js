import { createReducer } from "@reduxjs/toolkit";

const initialstates = {
    companydetails:null,
    msg:null,
    isloadingcompany: false,
    isloading: true,
    iserror: {
        status: false,
        msg: null
    }
}

export const companyReducer = createReducer(initialstates, (builder) => {
    builder.addCase("addcompanyloading", (state) => {
        state.isloadingcompany = true
    })
    builder.addCase("addcompanysuccess", (state,action) => {
        state.isloadingcompany = false
        state.msg=action.payload[0]
        state.companydetails=action.payload[1]
    })
    builder.addCase("addcompanyerror", (state,action) => {
        state.isloadingcompany = false,
        state.iserror=action.payload
    })
    builder.addCase("getcompanyloading", (state) => {
        state.isloading = true
    })
    builder.addCase("getcompanysuccess", (state,action) => {
        state.isloading = false
        state.companydetails=action.payload
    })
    builder.addCase("getcompanyerror", (state,action) => {
        state.isloading = false,
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