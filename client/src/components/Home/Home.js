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
import { Drawer } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { Typography } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import PostAddIcon from '@material-ui/icons/PostAdd';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AirplayIcon from '@material-ui/icons/Airplay';
import { Button } from "@material-ui/core";

import { getPosts } from "../../actions/posts";
import {getComments} from '../../actions/comments'

function Home() {
 const drawerWidth = 240;
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      overflow:'hidden'
    },
    title:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    // toolbarFlex:{
    //   display: 'flex',
    //   justifyContent: 'flexEnd'
    // },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    avatar:{
      width:theme.spacing(7),
      height:theme.spacing(7),   
    },
    profile: {
      display: 'flex',
      justifyContent: 'center',
      // width: '400px',
    },
    logout:{
       position:'absolute',
      right:'10px',
      top:'5px'
    },
    userName:{
      margin:'10px'
    }
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
               <Button variant="contained" color="secondary" className={classes.logout} onClick={logout}>Logout</Button>
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
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Typography variant="h4" color="primary" className={classes.title}>
            Social Network
        </Typography>
        {/* <Divider /> */}
        <List>
          <ListItem >
            <ListItemIcon >
              <HomeIcon color="primary"/>
            </ListItemIcon>
            <Link to='/'>
            <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AirplayIcon color="primary"/>
            </ListItemIcon>
            <Link to='/newsfeed'>
            <ListItemText primary="Newsfeed" />
            </Link>
          </ListItem>
          <ListItem >
            <ListItemIcon>
              <PostAddIcon color="primary"/>
            </ListItemIcon>
            <Link to='/newsfeed'>
            <ListItemText primary="New Post" />
            </Link>
          </ListItem>
          <ListItem >
            <ListItemIcon>
              <PersonIcon color="primary"/>
            </ListItemIcon>
            <Link to='/profile'>
            <ListItemText primary="Profile" />
            </Link>
          </ListItem>
          <ListItem >
            <ListItemIcon >
              <NotificationsActiveIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Notification" />
          </ListItem>
        </List>
        {/* <Divider /> */}
        <List>
          <ListItem></ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.newsfeed}>
        <Form currentId={currentId} setCurrentId={setCurrentId}/>
        <Posts setCurrentId={setCurrentId}/>
        </div>
      </main>
    </div>
  );
}

export default Home;

