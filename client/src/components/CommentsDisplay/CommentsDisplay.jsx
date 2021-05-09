import {useSelector} from 'react-redux'
import { CircularProgress } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import CommentDisplay from '../CommentsDisplay/CommentDisplay/CommentDispaly';

const CommentsDisplay = () => {
    const comments = useSelector(state => state.comments)

    return ( 
        !comments.length ? <CircularProgress /> :(
            <Grid container alignItems="stretch" spacing={2}>
                {comments.map((comment) =>(
                    <Grid key={comment._id} item xs sm={12} lg={6}>
                        <CommentDisplay />
                    </Grid>
                ))}
            </Grid>
        )
     );
}
 
export default CommentsDisplay;