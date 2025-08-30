// 'use strict';
import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/postsController.js';

const router = express.Router();

router.get('/', getPosts); // GET request to /posts will call getPosts controller
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost); // likePost functionality can be handled in updatePost

export default router;
