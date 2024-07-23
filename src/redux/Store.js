import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/userreducer";
import { companyReducer } from "./company/companyreducer";
import { jobReducer } from "./Jobs/jobreducer";

export const store = configureStore({
    reducer:{
        user:userReducer,
        company:companyReducer,
        jobs:jobReducer
    }
})