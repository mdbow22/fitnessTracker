const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        enum: ['resistance','cardio']
    },
    name: {
        type: String
    },
    duration: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
        type: Number
    }
}, {
    discriminatorKey: 'type'
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;