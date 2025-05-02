import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import rentsalsRouter from './routes/rentals.js';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.SERVER_PORT || 8000;

const app = express();

app.use(cors());
app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (_, res) => {
  res.send("server is running ....");
});

app.use('/api/rentals', rentsalsRouter);

//In large scale applications, we can create custom middleware for loggoing and error handling, but I have used inbuilt middleware for simplicity.
app.use((req, res, next) => {
  console.log('404 error: ', req.method, req.url);
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next)  => {
  console.error(err);
  res.status(500).json({err: 'There was an error while serving the request.'});
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
});