import React from 'react'
import Post from '../Posts/Post/Post'
import {Grid,CircularProgress} from '@material-ui/core'
import useStyles from './styles'
import {useSelector} from 'react-redux'

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    
    const classes = useStyles();
    
    return ( 
       !posts.length ? <CircularProgress /> :(
           <div className={classes.root}>
               <Grid className={classes.container} container  spacing={3}>
               {posts.map((post) => (
                   <Grid key={post._id} item xs={12} sm={12} md={6} lg={6}>
                       <Post post={post} setCurrentId={setCurrentId}/>
                   </Grid>
               ))}
           </Grid>
           </div>
       )
     );
}

export default Posts;