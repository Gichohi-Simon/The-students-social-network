import React,{useState,useEffect} from 'react'
// import Post from './Post/Post'
import Post from '../Posts/Post/Post'
import useStyles from './styles'
import {useDispatch} from 'react-redux'
import { getPosts } from "../../actions/posts";

import {useSelector} from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import { Grid } from '@material-ui/core'

const Posts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());
    },[dispatch])

    const posts = useSelector((state) => state.posts)
    const classes = useStyles();

    console.log(posts)
    return ( 
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} />
                     </Grid>   
                ))}
            </Grid>
        )
     );
}
 
export default Posts;