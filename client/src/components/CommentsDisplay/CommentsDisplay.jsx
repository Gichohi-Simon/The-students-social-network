import {useSelector} from 'react-redux'
import { CircularProgress } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import CommentDisplay from '../CommentsDisplay/CommentDisplay/CommentDispaly';
import useStyles from './style'

const CommentsDisplay = () => {
    const comments = useSelector(state => state.comments)
    console.log(comments);
    const classes = useStyles()

    return ( 
        !comments.length ? <CircularProgress /> :(
            <Grid container alignItems="stretch" spacing={2} className={classes.main}>
                {comments.map((comment) =>(
                    <Grid key={comment._id} item xs sm={12} lg={6}>
                        <CommentDisplay comment={comment}/>
                    </Grid>
                ))}
            </Grid>
        )
     );
}
 
export default CommentsDisplay;