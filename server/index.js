//'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config(); // load environment variables from .env file

// import routes
import postsRoutes from './routes/postsRoutes.js';

// initialize express app
const app = express();

app.use('/posts', postsRoutes); // use posts routes

app.use(bodyParser.json({ limit: '30mb', extended: true })); // set limit for json body (imgs and other large data)
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true })); // set limit for json body (imgs and other large data)
app.use(cors());

// set up mongoose connection
// const CONNECTION_URL = process.env.CONNECTION_URL || 'mongodb://localhost:27017/lifeNotes-db'; // fallback to local MongoDB if env variable is not set
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true, // these options are deprecated, no longer needed
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false); // useFindAndModify is deprecated, no longer needed
