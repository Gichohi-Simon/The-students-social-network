import { makeStyles } from "@material-ui/core/styles";
import image from "../../images/pattern.svg";

export default makeStyles(() => ({
  wrap: {
    //linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ),
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "750px",
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "400px",
  },
  landingBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  linkBtn:{
    textDecoration:'none',
  }
}));
