import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar} from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import useStyles from './style'
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';

function Home() {
    const classes = useStyles();
    return (
      <div>
        <AppBar color="primary">
          <Toolbar className={classes.toolBar}>
            <div className={classes.userName}>
              <Typography variant="h5">Social Network</Typography>
            </div>
            <div className={classes.userName}>
              <Typography variant="h5">Gichohi_Simon</Typography>
            </div>
            <div className={classes.userName}>
              <Button
                color="secondary"
                variant="contained"
              >
                <Link to='/'  className={classes.logout}>
                  Logout
                </Link>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
}
export default Home
