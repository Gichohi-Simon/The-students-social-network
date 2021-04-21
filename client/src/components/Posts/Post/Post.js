import React from 'react'
import useStyles from './styles'
import {useDispatch} from 'react-redux'
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { ThumbUpAlt } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';


const Post = ({post}) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    return ( 
        <div>
            <Card className={classes.card}>
                <CardHeader className={classes.header}>
                    <Typography variant="h5">
                        {post.name}
                    </Typography>
                    <Typography>
                        {post.title}
                    </Typography>
                </CardHeader>
                <CardMedia className={classes.media} image={post.selectedFile}/>
                <CardContent className={classes.content}>
                    <Typography variant="body1">
                        {post.message}
                    </Typography>
                    <Typography variant="body2">
                        {post.tags.map(tag => `#${tag}`)}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary">
                        <ThumbUpAlt fontSize="small"/>
                        {post.likeCount}                        
                    </Button>
                    <Button size="small" color="primary">
                        <DeleteIcon fontSize="small"/>
                        {post.likeCount}                        
                    </Button>
                </CardActions>

            </Card>
        </div>
     );
}
 
export default Post;