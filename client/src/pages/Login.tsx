import { Box, TextField, Typography, Grid, FormControlLabel, Checkbox } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import CopyrightIcon from '@mui/icons-material/Copyright'
import LoginIcon from '@mui/icons-material/Login'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api'
import { useAppDispatch } from '../app/hooks'
import { IUser, login } from '../features/User/userSlice'

enum Status {
    Loading = 'loading',
    Success = 'success',
    Fail = 'fail'
}

interface Error {
    type: 'email' | 'password',
    message: string
}

const Login = () => {
    const dispatch = useAppDispatch()
    const [status, setStatus] = useState<Status>(Status.Success)
    const [error, setError] = useState<Error | null>(null)
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        console.log('login data:', data)

        setStatus(Status.Loading)
        axios.post('auth/signin', data)
            .then(res => {
                console.log('login sucess:', res)

                const user: IUser = {
                    fullname: res.data.fullname,
                    email: res.data.email
                }
                dispatch(login(user))

                setStatus(Status.Success)
                navigate('..')
            })
            .catch(err => {
                console.log('login fail:', err)
                setStatus(Status.Fail)

                if (err.response.status === 400) {
                    setError({
                        type: 'password',
                        message: err.response.data.message
                    })
                }
                else if (err.response.status === 404) {
                    setError({
                        type: 'email',
                        message: err.response.data.message
                    })
                }
            })
    }

    return (
        <Box display='flex' height='100%'>
            <Box
                flex={1}
                display='flex'
                flexDirection='column'
            >
                <Box
                    flex={1}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    padding='0 100px'
                >
                    <Box width='100%' maxWidth='400px'>
                        <Typography display='inline' variant='h5'>Welcome to</Typography>
                        <Typography display='inline' variant='h5' color='green'> IoTFarm</Typography>
                        <Typography
                            variant='h2'
                            margin='60px 0 40px'
                            fontWeight='400'
                        >Login</Typography>
                        <Box
                            component="form"
                            autoComplete="off"
                            onSubmit={handleSubmit}
                            sx={{
                                '& .MuiInputBase-input': {
                                    fontSize: '20px',
                                    p: '20px 32px'
                                },
                            }}
                        >
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        required
                                        label="Email"
                                        type='email'
                                        name='email'
                                    />
                                    {error && error.type === 'email' && <Typography variant='subtitle1' color='red'>{error.message}</Typography>}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        required
                                        label="Password"
                                        type='password'
                                        name='password'
                                    />
                                    {error && error.type === 'password' && <Typography variant='subtitle1' color='red'>{error.message}</Typography>}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControlLabel
                                        control={<Checkbox value="rememberme" color="success" />}
                                        label={<Typography variant='subtitle1' fontSize='20px'>Remember me</Typography>}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Link to='..\forgotpassword'>
                                        <Typography
                                            variant='subtitle1'
                                            color='black'
                                            align='right'
                                            fontSize='20px'
                                            textTransform='capitalize'
                                            sx={{
                                                '&:hover': {
                                                    textDecoration: 'underline'
                                                }
                                            }}
                                        >Forgot Password?</Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                            <LoadingButton
                                type="submit"
                                loading={status === Status.Loading}
                                loadingPosition='end'
                                fullWidth
                                variant="contained"
                                endIcon={<LoginIcon />}
                                sx={{ mt: 3, mb: 2, p: '20px 32px' }}
                            >
                                <Typography variant='h5' color='white' textTransform='capitalize'>login</Typography>
                            </LoadingButton>
                        </Box>
                    </Box>
                </Box>
                <Box margin='25px 50px'>
                    Copyright
                    <CopyrightIcon fontSize='small' sx={{ mb: '-4px', mx: 0.5 }} />
                    2023

                    <Typography display='inline' variant='body1' color='green'> IoTFarm </Typography>
                    All rights reserved.
                </Box>
            </Box>
            <Box flex={1}>
                <Carousel />
            </Box>
        </Box>
    )
}

export default Login