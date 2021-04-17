import { ADD_PHOTO_REQUEST, ADD_PHOTO_SUCCESS, ADD_PHOTO_FAIL, GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAIL } from '../constants/photoConstants'
import axios from 'axios'

export const getPhotosAction = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_PHOTOS_REQUEST
        })

        const {
            login: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        }


        const { data } = await axios.get(
            '/api/photos',
            config
        )

        dispatch({
            type: GET_PHOTOS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_PHOTOS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const createPhotoAction = (activityData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_PHOTO_REQUEST
        })

        const {
            login: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            }
        }


        const { data } = await axios.post(
            '/api/photos',
            activityData,
            config
        )

        dispatch({
            type: ADD_PHOTO_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADD_PHOTO_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}