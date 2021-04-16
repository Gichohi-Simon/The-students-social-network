import React from "react";
import useStyles from "./style";
import { makeStyles } from "@material-ui/core/styles";
import Form from "../Form/Form";
import Post from "../Posts/Post/Post";
import image from '../../images/beach1.jpg';

import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { Divider } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";

import PersonIcon from '@material-ui/icons/Person';
import PostAddIcon from '@material-ui/icons/PostAdd';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

function Home() {
  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
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
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            <Avatar src={image}/>
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
        <Divider />
        <List>
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
        <Divider />
        <List>
          <ListItem></ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Form />
        <Post />
      </main>
    </div>
  );
}
export default Home;

