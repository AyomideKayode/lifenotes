import React from 'react';
import useStyles from './styles';

const Post = () => {
  const classes = useStyles();
  return (
    <div>
      <h2>Post Component</h2>
      <p>This is where you can add your post elements.</p>
    </div>
  );
};

export default Post;
