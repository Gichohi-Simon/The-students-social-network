import {CREATE,FETCH_ALL} from '../constants/actionTypes'

const reducers = (posts = [], action)=> {
    switch(action.type){
        case CREATE:
            return[...posts,action.payload];
        default:
            return posts;
        case FETCH_ALL:
            return action.payload;
    }
}

export default reducers;

