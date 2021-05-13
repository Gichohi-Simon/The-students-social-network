import { Typography } from '@material-ui/core'

const CommentDisplay = (comment) => {
    console.log(comment.message)
    return ( 
        <div className="main">
            <Typography variant="h6">{comment.message}</Typography>
        </div>
     );
}

export default CommentDisplay;