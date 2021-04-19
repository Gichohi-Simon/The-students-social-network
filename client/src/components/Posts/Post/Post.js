import React from "react";
import useStyles from './styles'

import {useDispatch} from 'react-redux'

import { Card } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';
import { Typography } from "@material-ui/core";

const Post = ({post}) => {

  const classes = useStyles();
  // const dispatch = useDispatch();

  return (
    <div className={classes.main}>
        <Card className={classes.root}>
            <CardHeader className={classes.header}>
                avatar={
                   <Avatar alt="person-image"  className={classes.avatar}>
                     U
                   </Avatar>
                }
                <Typography variant="h6">
                {Post.name}
                </Typography>
                <Typography variant="h6">
                {Post.title}
                </Typography>
            </CardHeader>
            <CardMedia className={classes.media} image={Post.selectedFile} >
            </CardMedia>
            <CardContent className={classes.content}>
              <Typography variant="h5">{Post.message}</Typography> 
              <Typography variant="h5">{Post.tags}</Typography>
            </CardContent>
            <CardActions className={classes.actions}>
              <ThumbUpAltIcon />
              <CommentIcon />
              <DeleteIcon />
            </CardActions>
        </Card>
    </div>
  );
};

export default Post;
