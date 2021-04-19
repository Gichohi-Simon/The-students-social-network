import {combineReducers} from 'redux'
import posts from './postsReducers'

const rootReducer =  combineReducers({
    posts
})

export default rootReducer;