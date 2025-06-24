// 'use strict';
import express from 'express';

import { getPosts, createPosts } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts); // GET request to /posts will call getPosts controller
router.get('/', createPosts);

export default router;
