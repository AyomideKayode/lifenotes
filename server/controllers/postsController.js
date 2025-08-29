// 'use strict';

// import schema
import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find(); // find all post messages
    // console.log(postMessages);
    // send the post messages as a JSON response
    res.status(200).json(postMessages);
  } catch (error) {
    // send error message if something goes wrong
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body; // get the request body
  // create a new post message instance
  const newPost = new PostMessage(post);

  try {
    await newPost.save(); // save the post message to the database
    res.status(201).json(newPost); // send the new post message as a JSON response
  } catch (error) {
    res.status(409).json({ message: error.message }); // send error message if something goes wrong
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No post with that id');

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true, // return the updated post
    }
  );

  res.json(updatedPost); // send the updated post as a JSON response
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No post with that id');

  await PostMessage.findByIdAndDelete(id);

  res.json({ message: 'Post deleted successfully' });
};
