import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/userConstants'

export const registerReducer = (state = { userInfo: {} }, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload
            }
        case USER_REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case USER_LOGOUT:
            return {
                userInfo: null
            }
        default:
            return state
    }
}

export const loginReducer = (state = { userInfo: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case USER_LOGOUT:
            return {
                userInfo: null
            }
        default:
            return state
    }
}