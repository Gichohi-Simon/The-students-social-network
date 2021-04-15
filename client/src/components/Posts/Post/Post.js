// import React from 'react'
// import moment from 'moment'
// import {useDispatch} from 'react-redux'

// import { Typography } from '@material-ui/core';
// import { CardHeader } from '@material-ui/core';
// import { CardMedia } from '@material-ui/core';
// import { CardContent } from '@material-ui/core';
// import { CardActions } from '@material-ui/core';
// import { Button } from '@material-ui/core';
// import { Avatar } from '@material-ui/core';
// import { Card } from '@material-ui/core';

// import FavoriteIcon from '@material-ui/icons/Favorite';
// import DeleteIcon from '@material-ui/icons/Delete';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// import useStyles from './styles'

// const Post = ({post,setCurrentId}) =>  {

//     const classes = useStyles();
//     const dispatch = useDispatch();

//     return (
//         <div>
//             <Card className={classes.card}>
//                 <CardHeader>
//                 <Avatar className={classes.rounded}>
//                     <AccountCircleIcon />
//                 </Avatar>
//                 <Typography variant="h5" color="primary">
//                     {post.name}
//                 </Typography>
//                 <Typography variant="h6" color="primary">
//                     {moment(post.createdAt).fromNow()}
//                 </Typography>
//                 </CardHeader>
//                 <CardMedia 
//                     className={classes.media}
//                     image={post.selectedFile}
//                 />
//                 <CardContent>
//                     <Typography variant="h6">
//                         {post.tags}
//                     </Typography>
//                     <Typography variant="h6">
//                         {post.message}
//                     </Typography>
//                 </CardContent>
//                 <CardActions>
//                     <Button size="small" variant="contained" color="primary"><FavoriteIcon fontSize='small'/> {post.likeCount} </Button>
//                     <Button size="small" variant="contained" color="primary"><DeleteIcon  fontSize='small'/></Button>
//                 </CardActions>
//             </Card>

//         </div>
//     )
// }

// export default  Post;
