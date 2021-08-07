import { makeStyles } from "@material-ui/core/styles";
import image from "../../images/pattern.svg";

export default makeStyles((theme) => ({
  wrap: {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "750px",
  },

  heading:{
    marginTop:'30px',
    fontSize:'2.5rem',
    [theme.breakpoints.down('sm')]:{
      fontSize:'1.5rem'
    },
    fontWeight:'bold'
  },

  button:{
    fontSize:'small',
    [theme.breakpoints.down('sm')]:{
      fontSize:'small'
    }
  },
  paper:{
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('sm')]:{
      marginTop: theme.spacing(4)
    },
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    padding: theme.spacing(2),
  },
  
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  form:{
    width:'50%',
    [theme.breakpoints.down('sm')]:{
      width:'100%'
    },
    marginTop:theme.spacing(3)
  },
  formInput:{
    margin:10,
    width:'100%',
  },
  linkBtn:{
    textDecoration:'none',
    
  }
}));
