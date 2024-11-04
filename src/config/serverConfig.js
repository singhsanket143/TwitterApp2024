import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export const PORT = process.env.PORT || 3000; // Define a PORT variable

export const MONGO_URL = process.env.MONGO_URL; // Define a MONGO_URL variable

export const AWS_REGION = process.env.AWS_REGION; // Define a AWS_REGION variable

export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME; // Define a AWS_BUCKET_NAME variable

export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID; // Define a AWS_ACCESS_KEY_ID variable

export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY; // Define a AWS_SECRET_ACCESS_KEY variable