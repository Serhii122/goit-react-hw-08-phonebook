import React from 'react';
import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../redux/auth/authSlice.operations';
import Notiflix from 'notiflix';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formData = {
      name: data.get('firstName') + ' ' + data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    };
    if (!formData.name || !formData.email || !formData.password) {
      return Notiflix.Notify.failure('All fields must be filled out');
    }

    dispatch(apiRegisterUser(formData))
      .unwrap()
      .then(() => {
        Notiflix.Notify.success('Registration successful');
        navigate('/login');
      })
      .catch(error => {
        return Notiflix.Notify.failure(
          'This email is already in use. Please log in or use a different email.'
        );
      });
  };

  return (
    <div
      style={{
        backgroundColor: 'rgb(105, 155, 248)',
        height: '100vh',
        padding: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
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
              borderRadius: '20px',
              backgroundColor: 'rgb(250, 250, 250)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                component="form"
                noValidate
                onSubmit={onSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
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
                  SUBMIT
                </Button>
              </Box>
            </Box>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default RegisterPage;