import { GET_ACTIVITIES_REQUEST, GET_ACTIVITIES_SUCCESS, GET_ACTIVITIES_FAIL } from '../constants/activityConstants'
import axios from 'axios'

export const getActivitiesAction = (activityData) => async (dispatch) => {
    try {
        dispatch({
            type: GET_ACTIVITIES_REQUEST
        })


        const { data } = await axios.get(
            '/api/activities'
        )

        dispatch({
            type: GET_ACTIVITIES_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_ACTIVITIES_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}