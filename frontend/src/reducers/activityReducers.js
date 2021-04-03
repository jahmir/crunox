import { GET_ACTIVITIES_REQUEST, GET_ACTIVITIES_SUCCESS, GET_ACTIVITIES_FAIL, ADD_ACTIVITY_REQUEST, ADD_ACTIVITY_SUCCESS, ADD_ACTIVITY_FAIL, DELETE_ACTIVITY_REQUEST, DELETE_ACTIVITY_SUCCESS, DELETE_ACTIVITY_FAIL } from '../constants/activityConstants'

export const getActivitiesReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ACTIVITIES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_ACTIVITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                activities: action.payload,
            }
        case GET_ACTIVITIES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export const addActivityReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_ACTIVITY_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ADD_ACTIVITY_SUCCESS:
            return {
                ...state,
                loading: false,
                activity: action.payload,
            }
        case ADD_ACTIVITY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export const deleteActivityReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_ACTIVITY_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
            }
        case DELETE_ACTIVITY_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case DELETE_ACTIVITY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}