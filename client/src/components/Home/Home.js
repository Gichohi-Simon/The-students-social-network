import React from "react";
import Form from "../Form/Form";
import Navbar from "../Navbar/Navbar";
import useStyles from './style'


function Home() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Navbar />
      <Form />
    </div>
  );
}
export default Home;
