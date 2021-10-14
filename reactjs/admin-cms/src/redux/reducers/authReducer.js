
import * as type from '../const'

let initialState = {
    isLoggedIn: false,
    username: "",
    token: "",
    submitting: false,
    message: ""
}

function authReducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case type.USER_LOGIN:
            return {
                isLoggedIn: false,
                username: "",
                token: "",
                submitting: true,
                message: "",
            }

        case type.USER_LOGIN_SUCCEEDED:
            return {
                isLoggedIn: true,
                username: action.payload.username,
                token: action.payload.token,
                submitting: false,
                message: ""
            }

        case type.USER_LOGIN_FAILED:
            return {
                isLoggedIn: false,
                username: "",
                token: "",
                submitting: false,
                message: action.message,
            }

        default:
            return state 
    }
}

export { authReducer }