import React,{useState,useEffect} from "react";
import FileBase from "react-file-base64";
import useStyles from "./styles";

import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import {useDispatch,useSelector} from 'react-redux';
import {createPost,updatePost} from '../../actions/posts'

const Form = ({currentId,setCurrentId}) => {
  const [postData,setPostData] = useState({
    name:'', title:'',message:'',tags:'',selectedFile:'',
  })
  const classes = useStyles();
  const dispatch = useDispatch();
  //populates the form with the id selected.
  const post = useSelector((state) => currentId? state.posts.find((p) => p._id === currentId):null);
  
  useEffect(()=> {
    if(post) setPostData(post);
  },[post])

  const handleSubmit = async (e) => {
    e.preventDefault();  
    if(currentId === 0 ){
      dispatch(createPost(postData));
    }else{
      dispatch(updatePost(currentId,{postData}))
    }
    clear();
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({name:'', title:'',message:'',tags:'',selectedFile:''});
  }

  return (
    <div className={classes.main}>
    <Paper className={classes.paper} elevation={3}>
    <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.textField}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            color="primary"
            required
            className={classes.text}
            value={postData.name}
            onChange={(e) => setPostData({...postData,name:e.target.value})}
          />
        </div>

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
