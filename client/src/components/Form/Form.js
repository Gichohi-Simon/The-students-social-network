import React from "react";
import FileBase from "react-file-base64";
import useStyles from "./styles";

import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const Form = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
    <Paper className={classes.paper} elevation={3}>
    <form className={classes.form}>
        <div className={classes.textField}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            color="primary"
            required
            className={classes.text}
          />
        </div>

        <div className={classes.textField}>
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            color="primary"
            required
            className={classes.text}
          />
        </div>

        <div className={classes.textField}>
          <TextField
            name="message"
            label="Message"
            variant="outlined"
            color="primary"
            required
            multiline
            rows={3}
            className={classes.text}
          />
        </div>

        <div className={classes.textField}>
          <TextField
            name="tags"
            label="Tags"
            variant="outlined"
            color="primary"
            required
            className={classes.text}
          />
        </div>

        <div className={classes.textField}>
          <FileBase type="file" multiple={false} />
        </div>

        <div className={classes.textButton}>
          <Button variant="contained" color="primary" size="large" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Paper>
    </div>
  );
};

export default Form;
