import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Post from './Post/Post'; // Adjust the import path as necessary
import useStyles from './styles';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts); // Log the posts to see if they are being fetched correctly

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} size={{ xs: 12, sm: 6, md: 6 }}>
            <Post post={post} /> {/* Pass the post prop to the Post component */}
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
