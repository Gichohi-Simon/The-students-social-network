import { Typography } from '@material-ui/core'
import useStyles from './style'

const CommentDisplay = ({comment}) => {
    const classes = useStyles()
    console.log(comment.message)
    return ( 
        <div className={classes.main}>
            <Typography variant="h6">{comment?.name}</Typography>
            <Typography className={classes.message}variant="h6">{comment.message}</Typography>
        </div>
     );
}

export default CommentDisplay;