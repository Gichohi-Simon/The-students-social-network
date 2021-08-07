import { makeStyles } from "@material-ui/core/styles";
import image from "../../images/pattern.svg";

export default makeStyles((theme) => ({
  
  wrap: {
    //linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ),
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "870px",[theme.breakpoints.down('sm')]:{
      minHeight:'600px'
    }
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "400px",
  },
  title:{
    fontSize:'2.5rem',[theme.breakpoints.down('sm')]:{
      fontSize:'1.2rem',
      fontWeight:'bold'
    }
  },
  landingBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  linkBtn:{
    textDecoration:'none',
  },
  root:{
    fontSize:'small',
    [theme.breakpoints.down('sm')]:{
      fontSize:'small',
    }
  }
}));
