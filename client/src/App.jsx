// src/App.jsx
import React, { useEffect } from 'react';
import { Container, AppBar, Grow, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
// Importing the logo image
import lifenotes from './images/lifenotes.png';
import useStyles from './styles';
// import { useState } from 'react'

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align="center">
          LifeNotes
          <img className={classes.image} src={lifenotes} height='60' alt="LifeNotes logo" />
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid size={{ xs: 12, sm: 7 }}>
              <Posts />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
