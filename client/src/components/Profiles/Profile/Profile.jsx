import React, { useState } from "react";
import { Card, CardMedia, CardActions, Grid, Button } from "@material-ui/core";
import image from "../../../images/code.jpg";
import image1 from "../../../images/person.jpg";
import { Avatar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import useStyles from "./style";
import { Paper } from "@material-ui/core";

const Profile = () => {
  const [profile, setProfile] = useState(true);
  const classes = useStyles();

  function editProfile(){
    setProfile(false);
  }

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        {profile ? <>Hello</> : <>Bye</>}

        <Card>
          <CardMedia image={image} className={classes.cardMedia}>
            <Button
              onClick={editProfile}
              variant="outlined"
              size="small"
              color="primary"
              className={classes.edit}
            >
              <MoreHorizIcon />
            </Button>
            <div>
              <Avatar src={image1} className={classes.avatar} />
            </div>
          </CardMedia>
          <CardActions className={classes.CardActions}></CardActions>

          <Paper className={classes.profile}>
            <div className={classes.occupation}>
              <Typography variant="h4" color="primary">
                Software Engineer
              </Typography>
            </div>

            <div className={classes.education}>
              <Typography variant="h5" color="primary">
                Jomo Kenyatta University of Agriculture and Technology
              </Typography>
            </div>

            <div className={classes.hobbies}>
              <Typography variant="h6" color="primary">
                Karate, Swimming, Programming
              </Typography>
            </div>

            <div className={classes.location}>
              <LocationOnIcon color="primary" />
              <Typography variant="h6" color="primary">
                Nairobi
              </Typography>
            </div>
          </Paper>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
