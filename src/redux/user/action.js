export const signup = (userobj) => async (dispatch) => {
    try {
        dispatch({
            type: "signuppending"
        })
        const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userobj)
        })
        const res = await data.json()
        if (res.status) {
            dispatch({
                type: "signupsuccess",
                payload: res.msg
            })
        }
        else {
            dispatch({
                type: "signuperror",
                payload: {
                    status: true,
                    msg: res.error
                }
            })
        }
    } catch (error) {
        dispatch({
            type: "signuperror",
            payload: {
                status: true,
                msg: error.message
            }
        })
    }
}

export const loginuser = (userobj) => async (dispatch) => {
    try {
        dispatch({
            type: "loginpending"
        })
        const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/company/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userobj)
        })
        const res = await data.json()
        if (res.status) {
            localStorage.setItem("token", res.token)
            dispatch({
                type: "loginsuccess",
                payload: res.token
            })
        }
        else {
            throw new Error(res.error)
        }
    } catch (error) {
        dispatch({
            type: "loginerror",
            payload: {
                status: true,
                msg: error.message
            }
        })
    }
}

export const getuser = (token) => async (dispatch) => {
    try {
        dispatch({
            type: "getuserpending"
        })
        const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/getusercompany`, {
            method: "GET",
            headers: {
                token: token,
                "Content-type": "application/json",
                Accept: "application/json"
            }
        })
        const res = await data.json()
        if (res.status) {
            dispatch({
                type: "getusersuccess",
                payload:res.user
            })
        }
        else {
            throw new Error(res.error)
        }
    } catch (error) {
        dispatch({
            type: "getusererror",
            payload: {
                status: true,
                msg: error.message
            }
        })
    }
}

export const updatepersonalinfo = (obj) => async (dispatch) => {
    try {
        dispatch({
            type: "updatepersonalinfopending"
        })
        const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/updateuser/${obj.id}`, {
            method: "PUT",
            headers: {
                token: localStorage.getItem("token"),
                "Content-type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        const res = await data.json()
        if (res.status) {
            dispatch({
                type: "updatepersonalinfosuccess",
                payload: [res.msg, res.user]
            })
        }
        else {
            dispatch({
                type: "updatepersonalinfoerror",
                payload: {
                    status: true,
                    msg: res.error
                }
            })
        }
    } catch (error) {
        dispatch({
            type: "updatepersonalinfoerror",
            payload: {
                status: true,
                msg: error.message
            }
        })
    }
}

