// 'use strict';
import express from 'express';

import { getPosts, createPost, updatePost, deletePost } from '../controllers/postsController.js';

const router = express.Router();

router.get('/', getPosts); // GET request to /posts will call getPosts controller
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
