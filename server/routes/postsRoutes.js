// 'use strict';
import express from 'express';

import { getPosts, createPost } from '../controllers/postsController.js';

const router = express.Router();

router.get('/', getPosts); // GET request to /posts will call getPosts controller
router.post('/', createPost);

export default router;
