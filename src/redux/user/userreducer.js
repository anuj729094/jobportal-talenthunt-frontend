import { createReducer } from "@reduxjs/toolkit";

const initialstates = {
    userdata: null,
    token: null,
    companydetails: null,
    isloading: false,
    msg:null,
    isloadinguser: true,
    iserror: {
        status: false,
        msg: null
    },
    iserroruser: {
        status: false,
        msg: null
    },
}

export const userReducer = createReducer(initialstates, (builder) => {
    builder.addCase("signuppending", (state) => {
        state.isloading = true
    })
    builder.addCase("signupsuccess", (state, action) => {
        state.isloading = false
        state.msg = action.payload
    })
    builder.addCase("signuperror", (state, action) => {
        state.isloading = false
        state.iserror = action.payload
    })
    builder.addCase("loginpending", (state) => {
        state.isloading = true
    })
    builder.addCase("loginsuccess", (state, action) => {
        state.isloading = false
        state.token = action.payload
    })
    builder.addCase("loginerror", (state, action) => {
        state.isloading = false
        state.iserror = action.payload
    })
    builder.addCase("getuserpending", (state) => {
        state.isloadinguser = true
    })
    builder.addCase("getusersuccess", (state, action) => {
        state.isloadinguser = false
        state.userdata = action.payload
    })
    builder.addCase("getusererror", (state, action) => {
        state.isloadinguser = false
        state.iserroruser = action.payload
    })
    builder.addCase("updatepersonalinfopending", (state) => {
        state.isloading = true
    })
    builder.addCase("updatepersonalinfosuccess", (state, action) => {
        state.isloading = false
        state.userdata = action.payload[1]
        state.msg=action.payload[0]
    })
    builder.addCase("updatepersonalinfoerror", (state, action) => {
        state.isloading = false
        state.iserror = action.payload
    })
    builder.addCase("allprojectactionspending", (state) => {
        state.isloading = true
    })
    builder.addCase("allprojectactionssuccess", (state, action) => {
        state.isloading = false
        state.msg=action.payload[0]
        state.userdata = action.payload[1]
    })
    builder.addCase("allprojectactionserror", (state, action) => {
        state.isloading = false
        state.iserror = action.payload
    })
    builder.addCase("clearerror", (state) => {
        state.iserror = {
            status: false,
            msg: null
        }
    })
    builder.addCase("clearerroruser", (state) => {
        state.iserroruser = {
            status: false,
            msg: null
        }
    })
    builder.addCase("clearmessage", (state) => {
        state.msg = null
    })
    builder.addCase("clearuserdata", (state) => {
        state.userdata = null
        state.token=null
    })
})