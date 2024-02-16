import React from 'react';
import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../redux/auth/authSlice.operations';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Notiflix from 'notiflix';

const defaultTheme = createTheme();

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formData = {
      email: data.get('email'),
      password: data.get('password'),
    };

    if (!formData.email || !formData.password) {
      return Notiflix.Notify.failure('All fields must be filled out');
    }

    try {
      await dispatch(apiLoginUser(formData)).unwrap();
    } catch (error) {
      return Notiflix.Notify.failure(
        'Invalid email or password. Please try again.'
      );
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'rgb(105, 155, 248)',
        height: '100vh',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Grid
          container
          component="main"
          sx={{
            height: '25%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '30px',
              borderRadius: '15px',
              backgroundColor: 'rgb(250, 250, 250)',
            }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                component="form"
                noValidate
                onSubmit={onSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    '&:hover': {
                      backgroundColor: '#646464',
                    },
                  }}
                >
                  Log In
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default LoginPage;