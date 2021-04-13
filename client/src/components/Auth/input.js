import React from 'react'
import { TextField, Grid ,InputAdornment, IconButton } from '@material-ui/core'
import { Visibility,VisibilityOff } from '@material-ui/icons'

const Input = ({name,label,type,autoFocus,half,handleChange,handleShowPassword}) => {
    return (
        <div>
            <Grid item xs={12} sm={half ? 6 : 12}>
                <TextField 
                    name={name}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    label={label}
                    autoFocus={autoFocus}
                    type={type}
                    //if you have a ternary operator and the end is null, you can use the && instead of null at the end.
                    InputProps = {name === 'password' ? {
                        endAdornment:(
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword}>
                                    {type === 'password' ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    } : null }
                />
            </Grid>
        </div>
    )
}

export default Input