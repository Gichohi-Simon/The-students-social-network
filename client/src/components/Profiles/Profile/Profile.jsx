import React from "react";
import { Card, CardMedia, CardActions, Grid, Button } from "@material-ui/core";
import image from "../../../images/code.jpg";
import image1 from "../../../images/person.jpg";
import image2 from "../../../images/mountain.jpg";
import image3 from "../../../images/camera.jpg";
import { Avatar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import useStyles from "./style";

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <Card>
          <CardMedia image={image} className={classes.cardMedia}></CardMedia>
          <hr />
          <CardActions className={classes.CardActions}>
            <div>
              <Avatar src={image1} className={classes.avatar} />
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

        <Grid className={classes.grid} 
          direction="row"
          justify="center"
          alignItems="center"
        > 
          <Grid item className={classes.gridItem}  xs={12} md={6} lg={3}>
            <Card className={classes.gridCard} >
                <CardMedia image={image} className={classes.gridImage}>
                </CardMedia>
            </Card>
          </Grid>

          <Grid item className={classes.gridItem}  xs={12} md={6} lg={3}>
            <Card className={classes.gridCard}>
                <CardMedia image={image2} className={classes.gridImage}>
                </CardMedia>
            </Card>
          </Grid>

          <Grid item className={classes.gridItem}  xs={12} md={6} lg={3}>
            <Card className={classes.gridCard}>
                <CardMedia image={image3} className={classes.gridImage}>
                </CardMedia>
            </Card>
          </Grid>
          
        </Grid>
      </div>
    </div>
  );
};

export default Profile;
