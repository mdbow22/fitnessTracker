const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ExerciseSchema = require('./exercises');

const WorkoutSchema = new Schema({
    day: {
        type: Date
    },
    exercises:
        {
            type: [ExerciseSchema],
            default: []
        }
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;