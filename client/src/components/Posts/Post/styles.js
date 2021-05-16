import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    diplay: "flex",
    flexDirection:'column',
    justifyContent: "center",
  },
  paper: {
    width:'200px',
    height:'auto',
    display:'block',
    marginLeft:'auto',
    marginRight:'auto',
    position: "relative",
    left: '500px',
    top:'300px',
    border: "2px solid #000",
    boxShadow: theme.shadows[1],
    padding:'10px',
  },
  card: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",
    height: "100%",
    minWidth: "320px",
    maxWidth: "320px",
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
