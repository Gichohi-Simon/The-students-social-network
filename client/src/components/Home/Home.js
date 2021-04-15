import React,{useEffect,useState} from "react";
import {useDispatch} from 'react-redux';
import {getPosts} from '../../actions/posts'

import Form from "../Form/Form";
import Navbar from "../Navbar/Navbar";
import Post from "../Posts/Post/Post";
import useStyles from './style'

function Home() {
  const [currentId,setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId,dispatch]);

  return (
    <div className={classes.main}>
      <Navbar />
      <Form  currentId={currentId} setCurrentId={setCurrentId}/>
      <Post setCurrentId={setCurrentId}/>
    </div>
  );
}
export default Home;
