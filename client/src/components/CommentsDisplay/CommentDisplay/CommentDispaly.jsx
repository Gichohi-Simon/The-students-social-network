import { Typography } from '@material-ui/core'
import useStyles from './style'

const CommentDisplay = ({comment}) => {
    const user = JSON.parse(localStorage.getItem("profile"));
    const classes = useStyles()
    console.log(comment.message)
    const name  = user?.result?.name
    return ( 
        <div className={classes.main}>
            <Typography variant="h6">{comment?.name}</Typography>
            <Typography variant="h6">{comment.message}</Typography>
        </div>
     );
}

export default CommentDisplay;