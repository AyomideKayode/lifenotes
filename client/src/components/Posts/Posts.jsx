import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Post from './Post/Post'; // Adjust the import path as necessary
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  // console.log('Posts in component:', posts); // Debug log
  // console.log('Number of posts:', posts?.length); // Debug log

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={4}>
        {posts.map((post) => (
          <Grid key={post._id} size={{ xs: 12, sm: 6, md: 6 }}>
            <Post post={post} setCurrentId={setCurrentId} /> {/* Pass the post prop to the Post component */}
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
