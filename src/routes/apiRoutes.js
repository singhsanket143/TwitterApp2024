import express from 'express';
import v1Router from './v1/v1Routes.js';
import v2Router from './v2/v2Routes.js';
const router = express.Router(); // Create a new router object

router.use('/v1', v1Router); // if the remaining url starts with /v1, use the v1Router

router.use('/v2', v2Router);

export default router; // Export the router object