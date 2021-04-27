import React from "react";
import { Card, CardMedia, CardActions, Grid, Button } from "@material-ui/core";
import image from "../../../images/person.jpg";
import { Avatar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import useStyles from "./style";

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <Card>
          <CardMedia src={image} className={classes.cardMedia}></CardMedia>
          <hr />
          <CardActions className={classes.CardActions}>
            <div>
              <Avatar className={classes.avatar} />
            </div>

            <div className={classes.CardActionsContent}>
                <Typography variant="h6">50 posts 500 followers 120 following</Typography>
              </div>
            <div className={classes.button}>
              <Button variant="contained" color="primary">
                Edit Profile
              </Button>
            </div>
          </CardActions>
        </Card>

        <Grid className={classes.grid} > 
          <Grid item className={classes.gridItem}  xs={12} md={6} lg={3}>
            <image src={image} />
            image
          </Grid>
          <Grid item className={classes.gridItem} xs={12} md={6} lg={3}>
            <image src={image} />
            image
          </Grid>
          <Grid item className={classes.gridItem} xs={12} md={6} lg={3}>
            <image src={image} />
            image
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Profile;
