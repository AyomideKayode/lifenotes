// 'use strict';

// import schema
import PostMessage from '../models/postMessage.js';

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

export const createPosts = async (req, res) => {
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
