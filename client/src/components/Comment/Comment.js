import React from 'react'
import useStyles from './style'
import { TextField } from '@material-ui/core'


const Comment = () => {

    const classes = useStyles()

    return ( 
        <div className={classes.comment}>
            <TextField 
                name="comment"
                label="comment"
                color="primary"
                variant="outlined"
                fullWidth
                className={classes.commentSection}
            />
        </div>
     );
}

export default Comment;