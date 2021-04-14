import React from 'react'
import { Paper, TextField } from '@material-ui/core'
import useStyles from './styles'
import FileBase from 'react-file-base64';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';


export default function Form() {

    const classes = useStyles();

    return (
        <div className={classes.main}>
            <Paper className={classes.formPaper} elevation={3}>
            <Typography variant="h6"  color="primary" className={classes.paperHead}>
                New Post
            </Typography>
                <form autoComplete="off" noValidate className={classes.form}>
                    <div className={classes.textField}>
                    <TextField label="title" variant="filled" color="primary" fullWidth />
                    </div>
                    
                    <div className={classes.textField}>
                    <TextField label="message" variant="outlined" color="primary" fullWidth multiline  rows={4}/>
                    </div>

                    <div className={classes.textField}>
                    <TextField label="tags" variant="outlined" color="primary" fullWidth />
                    </div>

                    <div className={classes.fileInput} >
                        <FileBase 
                            type="file"
                            multiple={false}
                        />
                    </div>

                    <div className={classes.formBtn}>
                        <Button variant="contained" color="primary">
                            Post
                        </Button>
                    </div>

                </form>
            </Paper>
        </div>
    )

}
