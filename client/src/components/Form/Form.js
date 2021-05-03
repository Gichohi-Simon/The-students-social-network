import React,{useState,useEffect} from "react";
import FileBase from "react-file-base64";
import useStyles from "./styles";

import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import {useDispatch,useSelector} from 'react-redux';
import {createPost,updatePost} from '../../actions/posts'
import { Typography } from "@material-ui/core";

const Form = ({currentId,setCurrentId}) => {
  const [postData,setPostData] = useState({
    title:'',message:'',tags:'',selectedFile:'',
  })
  const classes = useStyles();
  const dispatch = useDispatch();
  //populates the form with the id selected.
  const post = useSelector((state) => (currentId? state.posts.find((message) => message._id === currentId):null));
  const user = JSON.parse(localStorage.getItem('profile'));
  
  useEffect(()=> {
    if(post) setPostData(post);
  },[post])

  const clear = () => {
    setCurrentId(0);
    setPostData({title:'',message:'',tags:'',selectedFile:''});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();  
    if(currentId){
      dispatch(updatePost(currentId,{...postData, name:user?.result?.name}))
      clear();

    }else{
      dispatch(createPost({...postData, name:user?.result?.name}));
      clear();
    }
  }

  if (!user?.result?.name) {
    return (
      <Paper className={classes.loginPrompt}>
        <Typography variant="h6" align="center" color="primary">
          Please Sign In to create your own post and like other's posts.
        </Typography>
      </Paper>
    );
  }

  return (
    <div className={classes.main}>
    <Paper className={classes.paper} elevation={3}>
    <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.textField}>
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            color="primary"
            required
            className={classes.text}
            value={postData.title}
            onChange={(e) => setPostData({...postData,title:e.target.value})}
          />
        </div>

        <div className={classes.textField}>
          <TextField
            name="message"
            label="Message"
            variant="outlined"
            color="primary"
            required
            multiline
            rows={3}
            className={classes.text}
            value={postData.message}
            onChange={(e) => setPostData({...postData,message:e.target.value})}
          />
        </div>

        <div className={classes.textField}>
          <TextField
            name="tags"
            label="Tags"
            variant="outlined"
            color="primary"
            required
            className={classes.text}
            value={postData.tags}
            onChange={(e) => setPostData({...postData,tags:e.target.value})}
          />
        </div>

        <div className={classes.textField}>
          <FileBase type="file" multiple={false} 
          onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>

        <div className={classes.textButton}>
          <Button variant="contained" color="primary" size="large" type="submit" >
            Post
          </Button>
        </div>
      </form>
    </Paper>
    </div>
  );
};

export default Form;
