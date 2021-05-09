import {combineReducers} from 'redux'
import posts from './postsReducers'
import comments from './commentReducer'
import auth from './authReducers'

const rootReducer =  combineReducers({
    posts,auth,comments
})

export default rootReducer;