import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRoutes.js';
import connectDB from './config/dbConfig.js';

// Create a new express app/server object
const app = express();
console.log(import.meta);
app.set('view engine', 'ejs');

app.set('views', import.meta.dirname + '/views');

app.use(morgan('combined'));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use('/api', apiRouter); // if the req url starts with /api, use the apiRouter

app.get('/', (req, res) => {
    res.render('home', {name: 'John Doe'});
});

app.get('/ping', (req, res) => {
    return res.json({
        message: 'pong'
    });
}); // what to do if someone makes a GET request to /ping

app.all('*', (req, res) => {
    return res.status(404).json({
        message: 'Not found'
    });
});

// Define a PORT and attach it to the express app
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});