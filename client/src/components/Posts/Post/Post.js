import React from "react";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import moment from "moment";

import { deletePost, likePost } from "../../../actions/posts";

import { Card } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CommentIcon from "@material-ui/icons/Comment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import { Avatar } from "@material-ui/core";
// import Comment from "../../Comment/Comment";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { ThumbUpAltOutlined } from "@material-ui/icons";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log({user});

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>
  
  };

  return (
    <div className={classes.main}>
      <Card className={classes.card}>
        <div className={classes.header}>
          <div className={classes.headerContainer}>
            {/* <Avatar className={classes.avatar}></Avatar> */}
            
            <div className={classes.headerContent}>
              <Typography variant="h6">{post.name}</Typography>
              <Typography variant="body2">
                {moment(post.createdAt).fromNow()}
              </Typography>
            </div>

            {(user?.result?.name === post?.name ||
              user?.result?.name === post?.name) && (
              <div className={classes.edit}>
                <Button
                  disabled={!user?.result}
                  variant="outlined"
                  onClick={() => setCurrentId(post._id)}
                  size="small"
                  color="primary"
                >
                  <MoreHorizIcon fontSize="default" />
                </Button>
              </div>
            )}
            
          </div>
        </div>
        <CardMedia className={classes.media} image={post.selectedFile} />
        <CardContent className={classes.content}>
          <Typography variant="body1">{post.message}</Typography>
          <Typography variant="body2">
            {post.tags.map((tag) => `#${tag}`)}
          </Typography>
        </CardContent>
        <div className={classes.comments}>{/* <Comment /> */}</div>
        <CardActions className={classes.cardActions}>
          <Button
            size="medium"
            color="primary"
            disabled={!user?.result}
            onClick={() => dispatch(likePost(post._id))}
          >
            <Likes>{post.likes}</Likes>
          </Button>
          <Button size="medium" color="primary" disabled={!user?.result}>
            <CommentIcon fontSize="small" />
            &nbsp;
          </Button>
          {(user?.result?.name === post?.name || user?.result?.name === post?.name) && (
        <Button size="small" color="primary"   disabled={!user?.result} onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
