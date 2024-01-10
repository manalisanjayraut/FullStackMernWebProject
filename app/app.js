import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import authRoute from './routes/authRoutes.js';
import userRoute from './routes/userRoutes.js';
import jobTypeRoute from './routes/jobsTypeRoutes.js';
import jobRoute from './routes/jobsRoutes.js';
import jobApplicationRoute  from './routes/jobApplication-route.js';
import cookieParser from 'cookie-parser';
import errorHandler from './middleware/error.js';

const app = express();

// Load environment variables from .env file
dotenv.config({ path: path.join(dirname(fileURLToPath(import.meta.url)), '.env') });

// Connect to MongoDB
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));




// Set up middleware and routes...

//MIDDLEWARE
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({
  limit: "5mb",
  extended: true
}));
app.use(cookieParser());
app.use(cors());

app.use('/api', authRoute);
app.use('/api', userRoute);
app.use('/api', jobTypeRoute);
app.use('/api', jobRoute);
app.use('/api', jobApplicationRoute);

console.log('i am here in app.js')
// Replace __dirname with the following lines
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

// ... (rest of the code remains the same)

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
