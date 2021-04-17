import { ADD_PHOTO_REQUEST, ADD_PHOTO_SUCCESS, ADD_PHOTO_FAIL, GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAIL } from '../constants/photoConstants'

export const getPhotosReducer = (state = { photos: [] }, action) => {
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_PHOTOS_SUCCESS:
            return {
                ...state,
                loading: false,
                photos: action.payload,
            }
        case GET_PHOTOS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export const addPhotoReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_PHOTO_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ADD_PHOTO_SUCCESS:
            return {
                ...state,
                loading: false,
                photo: action.payload,
            }
        case ADD_PHOTO_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}