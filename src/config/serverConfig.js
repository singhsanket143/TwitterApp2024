import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export const PORT = process.env.PORT || 3000; // Define a PORT variable

export const MONGO_URL = process.env.MONGO_URL; // Define a MONGO_URL variable