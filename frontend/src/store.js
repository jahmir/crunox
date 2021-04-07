import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { getActivitiesReducer, deleteActivityReducer, getActivityReducer } from './reducers/activityReducers'
import { registerReducer, loginReducer } from './reducers/userReducer'

const reducer = combineReducers({
    getActivities: getActivitiesReducer,
    deleteActivity: deleteActivityReducer,
    getActivity: getActivityReducer,
    register: registerReducer,
    login: loginReducer
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