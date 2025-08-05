// 'use strict';
import express from 'express';

import { getPosts, createPost, updatePost } from '../controllers/postsController.js';

const router = express.Router();

router.get('/', getPosts); // GET request to /posts will call getPosts controller
router.post('/', createPost);
router.patch('/:id', updatePost);

export default router;
