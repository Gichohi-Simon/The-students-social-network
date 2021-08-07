import React from "react";
import { Typography, Button } from "@material-ui/core";
import useStyles from "./style";
import { Link } from "react-router-dom";

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
      <div className={classes.heading}>
        <Typography variant="h3" color="primary" align="center" display="block" className={classes.title}>
          STUDENT SOCIAL NETWORK
        </Typography>
      </div>

      <div className={classes.landingBtn}>
        <Button variant="contained" color="primary" align="center"  classes={{
          root:classes.root,
          label:classes.label
        }}>
          <Link to='/auth' className={classes.linkBtn}>
            SignUp
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Landing;
