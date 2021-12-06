const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const workoutRoutes = require('./controllers/workouts');

//set port
const PORT = process.env.PORT || 5000;

//set up express app and middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//connect to database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//API routes
app.use('/api', workoutRoutes);

//Static Routes
app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/stats.html'));
});

app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/exercise.html'));
});

//make server go
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });