import React from 'react';
import Post from './Post/Post'; // Adjust the import path as necessary
import useStyles from './styles';

const Posts = () => {
  const classes = useStyles();
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
