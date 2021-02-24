const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// //Middlewares -- function executed when routes are hitted
app.use(cors());
app.use(bodyParser.json());

//ROUTES
app.get('/', (req, res) => {
  res.send('This is home');
});

// Connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  () => console.log('Connected to db')
);

//How to listen to a server
app.listen(3000);
