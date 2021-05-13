import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    diplay: "flex",
    justifyContent: "center",
  },
  paper: {
    width:'600px',
    height:'auto',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position: "absolute",
    left: 1200,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  card: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",
    height: "100%",
    minWidth: "400px",
    maxWidth: "400px",
  },
  header: {
    diplay: "flex",
    justifyContent: "space-between",
  },
  headerContainer: {
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  headerContent: {
    // marign:'20px',
    // padding:'30px'
  },
  edit: {
    position: "relative",
    left: "10px",
  },
  media: {
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  cardActions: {
    diplay: "flex",
    justifyContent: "space-between",
  },
  comments: {
    alignItems: "center",
  },
}));
