import express from 'express';
import { createTweet, getTweetById, getTweets } from '../../controllers/tweetController.js';
import { validate } from '../../validators/zodValidator.js';
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';
import { s3Uploader } from '../../config/multerConfig.js';

const router = express.Router(); // Create a new router object


router.get('/', getTweets);

router.get('/:id', getTweetById);

router.post('/', s3Uploader.single('tweetImage'), validate(tweetZodSchema), createTweet);

export default router; // Export the router object

// localhost:3000/tweet GET