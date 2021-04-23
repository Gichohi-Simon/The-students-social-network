import React,{useState,useEffect} from "react";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";

import {useDispatch} from 'react-redux';

import { makeStyles } from "@material-ui/core/styles";
import image from '../../images/person.jpg';
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
import { Link } from "react-router-dom"
import { getPosts } from "../../actions/posts";
import { Grid } from "@material-ui/core";

function Home() {
 const drawerWidth = 400;
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
      position:'absolute',
      right:'10px',
      top:'5px'
     
    },
  }));

  const classes = useStyles();
  const [currentId,setCurrentId] = useState(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());
  },[currentId,dispatch])
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbarFlex}>
          <Typography variant="h6" noWrap>
            <Avatar  src={image} className={classes.avatar}/>
          </Typography>
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
            <Link to='/'>
            <ListItemIcon >
              <HomeIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem >
            <ListItemIcon >
              <HomeIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Newsfeed" />
          </ListItem>
          <ListItem >
            <ListItemIcon >
              <PostAddIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="New Post" />
          </ListItem>
          <ListItem >
            <ListItemIcon >
              <PersonIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Profile" />
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

