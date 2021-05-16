import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root:{
   alignItems:'center',
   margin:'20px',
   [theme.breakpoints.down('sm')]:{
     margin:'0px'
   }
  },
  container: {
    display: 'flex',
    flexDirection:'column-reverse',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));
