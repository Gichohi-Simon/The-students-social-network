import {CREATE_COMMENT,FETCH_COMMENTS} from '../constants/actionTypes'
import * as api from '../api'

export const getComments = () => async(dispatch) => {
    try{
        const {data} = await api.fetchComments();
        dispatch({type:FETCH_COMMENTS,payload:data})
    }catch(error){
        console.log(error);
    }
}

export const createComment = (comment) => async(dispatch) => {
    try{
        const {data} = await api.createComment(comment);
        dispatch({type:CREATE_COMMENT,payload:data});
    }catch(error){
        console.log(error)
    }
}

