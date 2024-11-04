import express from 'express';
import { createTweet, deleteTweet, getTweetById, getTweets, updateTweet } from '../../controllers/tweetController.js';
import { validate } from '../../validators/zodValidator.js';
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';
import { s3Uploader } from '../../config/multerConfig.js';
import { getTweetByIdManualValidator } from '../../validators/tweetManualValidator.js';

const router = express.Router(); // Create a new router object


router.get('/', getTweets);

router.get('/:id', getTweetByIdManualValidator, getTweetById);

router.post('/', s3Uploader.single('tweetImage'), validate(tweetZodSchema), createTweet);

router.delete('/:id', getTweetByIdManualValidator, deleteTweet);

router.put('/:id', getTweetByIdManualValidator, updateTweet);

export default router; // Export the router object

// localhost:3000/tweet GET