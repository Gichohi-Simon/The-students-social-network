import React from 'react'
import './App.css';
import {Container,AppBar,Toolbar,Typography,Button} from '@material-ui/core';
import useStyles from './style'

const App = () => {

const classes = useStyles();

  return (  
    <Container maxwidth="lg">
      <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
              <Typography variant="h5" className={classes.title}>
                Student Social Network.
              </Typography>
              <Typography variant="h6" className={classes.userName} align="right">
                Gichohi_Simon
              </Typography>
              <Button variant="contained" style={{backgroundColor:"#00ACEE", color:'#ffffff'}}>
                  logout
              </Button>
          </Toolbar>
      </AppBar>
    </Container>
   );
}
 
export default App;
