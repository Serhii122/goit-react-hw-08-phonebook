import React from 'react';
import HomePagePart from 'components/Home/Home';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(105, 155, 248)',
        minHeight: '100vh',
        padding: '30px',
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
            <HomePagePart />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Home;