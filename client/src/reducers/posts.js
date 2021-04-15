import {CREATE, FETCH_ALL} from '../constants/actionTypes'

const reducers = (posts = [], action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts,action.payload];
        default:
            return posts
    }
}

export default reducers;
