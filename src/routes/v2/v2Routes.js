import express from 'express';
import tweetRouter from './tweet.js';
const router = express.Router(); // Create a new router object

router.use('/tweets', tweetRouter); // if the remaining url starts with /tweet, use the tweet router

export default router; // Export the router object