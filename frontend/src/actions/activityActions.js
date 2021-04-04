import { GET_ACTIVITIES_REQUEST, GET_ACTIVITIES_SUCCESS, GET_ACTIVITIES_FAIL, ADD_ACTIVITY_REQUEST, ADD_ACTIVITY_SUCCESS, ADD_ACTIVITY_FAIL, DELETE_ACTIVITY_REQUEST, DELETE_ACTIVITY_SUCCESS, DELETE_ACTIVITY_FAIL, GET_ACTIVITY_REQUEST, GET_ACTIVITY_SUCCESS, GET_ACTIVITY_FAIL, EDIT_ACTIVITY_FAIL, EDIT_ACTIVITY_REQUEST, EDIT_ACTIVITY_SUCCESS } from '../constants/activityConstants'
import axios from 'axios'

export const getActivitiesAction = () => async (dispatch) => {
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
        }, console.log('useEffect ran from activities success'))

    } catch (error) {
        dispatch({
            type: GET_ACTIVITIES_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const getActivityAction = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_ACTIVITY_REQUEST
        })


        const { data } = await axios.get(
            `/api/activities/${id}`
        )

        dispatch({
            type: GET_ACTIVITY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_ACTIVITY_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const createActivityAction = (activityData) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_ACTIVITY_REQUEST
        })


        const { data } = await axios.post(
            '/api/activities',
            activityData
        )

        dispatch({
            type: ADD_ACTIVITY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADD_ACTIVITY_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const deleteActivityAction = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_ACTIVITY_REQUEST
        })


        const { data } = await axios.delete(
            `/api/activities/${id}`
        )

        dispatch({
            type: DELETE_ACTIVITY_SUCCESS,
            payload: data
        }, console.log('delete success'))

    } catch (error) {
        dispatch({
            type: DELETE_ACTIVITY_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const editActivityAction = (activity) => async (dispatch) => {
    try {
        dispatch({
            type: EDIT_ACTIVITY_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }


        const { data } = await axios.put(
            `/api/activities/${activity._id}`,
            activity,
            config
        )

        dispatch({
            type: EDIT_ACTIVITY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EDIT_ACTIVITY_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}