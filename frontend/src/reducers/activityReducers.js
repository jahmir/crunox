import { GET_ACTIVITIES_REQUEST, GET_ACTIVITIES_SUCCESS, GET_ACTIVITIES_FAIL } from '../constants/activityConstants'

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