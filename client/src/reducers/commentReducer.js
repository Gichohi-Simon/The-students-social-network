import {CREATE_COMMENT,FETCH_COMMENTS} from '../constants/actionTypes'

const reducers = (comments = [], action) => {
    switch(action.type){
        case FETCH_COMMENTS:
            return action.payload;
        case CREATE_COMMENT:
            return [...comments, action.payload];
        default:
            return comments
    }
}

export default reducers;