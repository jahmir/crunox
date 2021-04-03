import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { getActivitiesReducer, deleteActivityReducer } from './reducers/activityReducers'

const reducer = combineReducers({
    getActivities: getActivitiesReducer,
    deleteActivity: deleteActivityReducer
})

const initialState = {

}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store