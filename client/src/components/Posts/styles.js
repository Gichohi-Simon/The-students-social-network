import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root:{
   alignItems:'center'
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
