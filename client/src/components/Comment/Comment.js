import React,{useState} from 'react'
import useStyles from './style'
import { TextField } from '@material-ui/core'
import {useDispatch} from 'react-redux';
import {createComment} from '../../actions/comments'

const Comment = () => {

    const classes = useStyles()
    const [comment, setComment] = useState({message:''});

    const dispatch = useDispatch()

    const clear = () => {
        setComment({message:''})
    }

    const handleChange = (e) => {
        setComment({...comment, message:e.target.value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(createComment(comment))
        clear();
    }


    return ( 
        <div className={classes.comment}>
            <form onSubmit={handleSubmit}>
            <TextField 
                className={classes.commentSection}
                name="message"
                label="comment"
                color="primary"
                variant="outlined"
                fullWidth
                value={comment.message}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            </form>
        </div>
     );
}

export default Comment;
