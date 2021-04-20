import React from 'react'
import useStyles from './styles'
import {useDispatch} from 'react-redux'
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { Typography } from '@material-ui/core';


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
                        
                    </Typography>
                </CardHeader>
                <CardMedia className={classes.media} image={post.selectedFile}/>
                
            </Card>
        </div>
     );
}
 
export default Post;