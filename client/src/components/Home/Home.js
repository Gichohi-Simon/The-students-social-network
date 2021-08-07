import React,{useState,useEffect} from "react";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";

import {useDispatch} from 'react-redux';
import { Link, useHistory,useLocation } from "react-router-dom"
import {LOGOUT} from '../../constants/actionTypes';
import decode from 'jwt-decode';

import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { getPosts } from "../../actions/posts";
import {getComments} from '../../actions/comments'


function Home() {
 const drawerWidth = 240;
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      overflow:'hidden',
    },
    title:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    appBar: {
      width: '100%',
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    avatar:{
      width:theme.spacing(6),
      margin:0,
      [theme.breakpoints.down('sm')]:{
        margin:'5px'
      },
      height:theme.spacing(6),
    },
    profile: {
      display: 'flex',
      justifyContent: 'center',
    },
    logout:{
      fonSize:'small',
       position:'absolute',
        right:'10px',
        top:'5px'
    },
    logoutbtn:{
      fontSize:'small',
      [theme.breakpoints.down('sm')]:{
        fontSize:'small'
      }
    },
    userName:{
      margin:'10px',
      fontSize:'1.25rem',
      [theme.breakpoints.down('sm')]:{
        fontSize:'1.0rem',
        margin:'10px',
        marginTop:'15px'
      }
    },
    newsContainer:{
      display:'flex',
      justifyContent:'center',
    },
    newsfeed:{
      width:'70%',
      display:'flex',
      [theme.breakpoints.down('sm')]: {
        width:'100%',
        display:'block',
      },
    },
  }));

  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const [currentId,setCurrentId] = useState(null);
  const dispatch = useDispatch();

  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  console.log(user)

  const logout = () => {
    dispatch({
      type:LOGOUT,
    });

    history.push('/auth');

    setUser(null);
  }
  
  useEffect(() => {
    const token = user?.token;

    if(token){
      const decodedToken = decode(token);

      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')))

  },[])

  useEffect(() => {   
    dispatch(getPosts());
  },[currentId,dispatch])

  useEffect(()=> {
    dispatch(getComments())
  })

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbarFlex}>
          {user ? (
            <div className={classes.profile}>
               <Avatar className={classes.avatar} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}
               </Avatar>
               <Typography className={classes.userName} variant="h6">{user.result.name}
                </Typography>
               <Button variant="contained" color="secondary" className={classes.logout} classes={{root:classes.logoutbtn}} onClick={logout}>Logout</Button>
            </div>
          ):(
            <div>
            <Button  component={Link} to='/auth' variant="contained" color="primary">
              Sign In
            </Button>
          </div>
          )}
        </Toolbar>
      </AppBar>
     
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.newsContainer}>
        <div className={classes.newsfeed}>
        <Form currentId={currentId} setCurrentId={setCurrentId} className={classes.postForm}/>
        <Posts setCurrentId={setCurrentId}/>
        </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
