import express from 'express';
import tweetRouter from './tweet.js';
import commentRouter from './comment.js';
const router = express.Router(); // Create a new router object

router.use('/tweets', tweetRouter); // if the remaining url starts with /tweet, use the tweet router

router.use('/comments', commentRouter); // if the remaining url starts with /comment, use the comment router

export default router; // Export the router object