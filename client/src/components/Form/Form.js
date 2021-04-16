import React,{useState,useEffect} from 'react'
import useStyles from './styles'
import FileBase from 'react-file-base64';

import { Paper, TextField } from '@material-ui/core'
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import {createPost} from '../../actions/posts'

const Form = ({currentId, setCurrentId}) => {

    const [postData,setPostData] = useState({
        name:'',title:'',message:'',tags:'',selectedFile:'',
    })
    const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventefault();
        dispatch(createPost({...postData}));
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ name:'',title:'',message:'',tags:'',selectedFile:''});
    }

   
    return (
        <div className={classes.main}>
            <Paper className={classes.formPaper} elevation={3}>
            <Typography variant="h6"  color="primary" className={classes.paperHead}>
                New Post
            </Typography>
                <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                    <div className={classes.textField}>
                    <TextField name="name" label="name" variant="filled" color="primary" fullWidth value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
                    </div>
                    
                    <div className={classes.textField}>
                    <TextField name="title" label="title" variant="outlined" color="primary" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    </div>

                    <div className={classes.textField}>
                    <TextField name="message" label="message" variant="outlined" color="primary" fullWidth multiline  rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                    </div>

                    <div className={classes.textField}>
                    <TextField name="tags" label="tags" variant="outlined" color="primary" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                    </div>

                    <div className={classes.fileInput} >
                        <FileBase 
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                        />
                    </div>

                    <div className={classes.formBtn}>
                        <Button variant="contained" color="primary">
                            Post
                        </Button>
                        <Button variant="contained" color="primary" onClick={clear}>
                            Clear
                        </Button>
                    </div>

                    {postData.name}
                    {postData.title}
                    {postData.message}
                    {postData.tags}
                </form>
            </Paper>
        </div>
    )

}

export default Form;
