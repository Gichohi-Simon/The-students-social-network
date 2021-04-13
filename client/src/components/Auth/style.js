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
  paper:{
    marginTop: theme.spacing(8),
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
