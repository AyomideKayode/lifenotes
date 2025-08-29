import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  if (!post) return null; // Handle case where post is not available

  // console.log('Post data:', post); // Debug log to check post data

  return (
    <Card className={classes.card}>
      {post.selectedFile ? (
        <div
          className={classes.media}
          style={{
            backgroundImage: `url(${post.selectedFile})`,
          }}
        />
      ) : (
        <div
          className={classes.media}
          style={{
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999'
          }}
        >
          No Image
        </div>
      )}
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            minWidth: '40px',
            padding: '8px'
          }}
          size='small'
          onClick={() => setCurrentId(post._id)} >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {Array.isArray(post.tags) ? post.tags.map(tag => `#${tag} `) : `#${post.tags}`}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" component="h2" gutterBottom>{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => { /* Handle likes */ }}>
          <ThumbUpAltIcon fontSize="small" />
          Like
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
