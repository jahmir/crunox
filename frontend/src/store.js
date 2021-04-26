import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { getActivitiesReducer, deleteActivityReducer, addActivityReducer, getActivityReducer } from './reducers/activityReducers'
import { registerReducer, loginReducer } from './reducers/userReducer'
import { getPhotosReducer, addPhotoReducer } from './reducers/photoReducers'

const reducer = combineReducers({
    getActivities: getActivitiesReducer,
    addActivity: addActivityReducer,
    deleteActivity: deleteActivityReducer,
    getActivity: getActivityReducer,
    register: registerReducer,
    login: loginReducer,
    getPhotos: getPhotosReducer,
    addPhoto: addPhotoReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    register: { userInfo: userInfoFromStorage },
    login: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store