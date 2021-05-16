import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {GoogleLogin} from 'react-google-login';
import {useHistory} from 'react-router-dom'
import {AUTH} from '../../constants/actionTypes'
import {signin,signup} from '../../actions/auth'

import { Paper,Container } from '@material-ui/core';
import useStyles from './style';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Input from './input';
import { Link } from 'react-router-dom';
import { Icon } from '@material-ui/core';

const initialState = {firstName:'',lastName:'',email:'',password:'', confrimPassowrd:''}

function Auth() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [isSignUp,setIsSignUp] = useState(false);
    const [showPassword,setShowPassword] = useState(false);
    const [formData,setFormData] = useState(initialState);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignUp){
            //we pass the history so that we can navigate once something happens
            dispatch(signup(formData,history))
        }else{
            dispatch(signin(formData,history))
        }
    };

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    }

    const googleSuccess = async(res) => {
        console.log(res)
        const result = res?.profileObj;
        const token = res?.tokenId;

        try{
            dispatch({
                type:AUTH,
                data:{result,token}
            })

            history.push('/newsfeed')
        }catch(error){
            console.log(error)
        }

    }

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sign In was unsuccesful. Try Again Later")
    }

    return (
        <div className={classes.wrap}>
           <Container componet="main" maxwidth="xs">
               <Typography variant="h2" align="center" color="primary" className={classes.heading}>
                   Hello
               </Typography>
               <Button variant="contained" color="primary"  classes={{root:classes.button}}>
                    <Link to="/" className={classes.linkBtn}>
                    Landing Page
                   </Link>
               </Button>
               <Paper elevation={2} className={classes.paper}>
                    <Typography componet="h1" variant="h5" color="primary">{isSignUp? 'Sign Up' : 'Sign In'}</Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {
                                isSignUp && (
                                    <>
                                        <div className={classes.formInput}>
                                            <Input name="firstName" label="FirstName" handleChange={handleChange}/>
                                        </div>
                                        <div className={classes.formInput}>
                                            <Input name="lastName" label="LastName" 
                                            handleChange={handleChange}/>
                                        </div>
                                    </>
                                )
                            }

                            <div className={classes.formInput}>
                                <Input  name="email" label="Email Address" type="email" 
                                handleChange={handleChange}/>
                            </div>

                            <div className={classes.formInput}>
                                <Input name="password" label="Password" type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} 
                                handleChange={handleChange}/>
                            </div>

                            <div className={classes.formInput}s>
                                {isSignUp && <Input name="confirmPassword" label="Repeat Password" type="password"
                                handleChange={handleChange}/>}
                            </div>
                        </Grid>

                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} classes={{root:classes.button}} >
                            <Link to='/newsfeed'> 
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                            </Link>
                        </Button>
                        <GoogleLogin 
                            clientId="901274137522-lniufm4fdqje9p5j6j8mnntkcclsrhdb.apps.googleusercontent.com"
                            render={(renderProps) =>(
                                <Button 
                                color="primary"
                                variant="contained"
                                fullWidth
                                onClick={renderProps.onClick}
                                disables={renderProps.disabled}
                                startIcon={<Icon />}
                                classes={{root:classes.button}}
                                >
                                    Sign In with Google
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />
                        <Grid container>
                            <Button onClick={switchMode} align="center" color="primary" fullWidth  classes={{root:classes.button}}>
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
