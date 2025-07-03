import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post'; // Adjust the import path as necessary
import useStyles from './styles';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts); // Log the posts to see if they are being fetched correctly

  return (
    <>
      <div>
        <h2 className={classes.heading}>Posts Component</h2>
        <Post />
        <Post />
      </div>
    </>
  );
};

export default Posts;
