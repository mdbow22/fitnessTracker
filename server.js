const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const db = require('./models');
const workoutRoutes = require('./controllers/workouts');

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

//API routes
app.use('/api', workoutRoutes);

//TODO: put in routes for front-end
app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/stats.html'));
});

//make server go
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });