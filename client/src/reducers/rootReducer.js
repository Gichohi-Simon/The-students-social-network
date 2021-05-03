import {combineReducers} from 'redux'
import posts from './postsReducers'
import auth from './authReducers'

const rootReducer =  combineReducers({
    posts,auth
})

export default rootReducer;