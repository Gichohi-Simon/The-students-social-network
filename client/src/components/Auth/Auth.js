import React,{useState} from 'react'
import { Paper,Container } from '@material-ui/core';
import useStyles from './style'
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Input from './input'
import { Link } from 'react-router-dom';

const initialState = {firstName:'',lastName:'',email:'',password:'', confrimPassowrd:''}

function Auth() {

    const classes = useStyles();
    const [isSignUp,setIsSignUp] = useState(false);
    const [showPassword,setShowPassword] = useState(false);
    const [formData,setFormData] = useState(initialState);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    }

    return (
        <div className={classes.wrap}>
           <Container componet="main" maxwidth="xs">
               <Typography variant="h2" align="center" color="primary">
                   Hello
               </Typography>
               <Button variant="contained" color="primary" >
                    <Link to="/" className={classes.linkBtn}>
                    Landing Page
                   </Link>
               </Button>
               <Paper elevation={2} className={classes.paper}>
                    <Typography componet="h1" variant="h5" color="primary">{isSignUp? 'Sign Up' : 'Sign In'}</Typography>
                    <form className={classes.form}>
                        <Grid container spacing={2}>
                            {
                                isSignUp && (
                                    <>
                                        <div className={classes.formInput}>
                                            <Input name="firstName" label="FirstName" />
                                        </div>
                                        <div className={classes.formInput}>
                                            <Input name="lastName" label="LastName" />
                                        </div>
                                    </>
                                )
                            }

                            <div className={classes.formInput}>
                                <Input  name="email" label="Email Address" type="email" />
                            </div>

                            <div className={classes.formInput}>
                                <Input name="password" label="Password" type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            </div>

                            <div className={classes.formInput}s>
                                {isSignUp && <Input name="confirmPassword" label="Repeat Password" type="password"/>}
                            </div>
                        </Grid>

                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            <Link to='/newsfeed'> 
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                            </Link>
                        </Button>

                        <Grid container>
                            <Button onClick={switchMode} align="center" color="primary" fullWidth>
                                {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </form>
               </Paper>
           </Container>
        </div>
    )
}

export default Auth
