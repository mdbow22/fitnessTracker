const express = require('express');
const mongoose = require('mongoose');
const db = require('./models');

//set port
const PORT = process.env.PORT || 5000;

//set up express app and middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//connect to database
mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//make server go
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });