const router = require('express').Router();
const db = require('../models');

//get all workouts
router.get('/workouts', async (req, res) => {
    const workouts = await db.Workout.aggregate([
        {$addFields: {totalDuration: {$sum: '$exercises.duration'}}}
    ]);

    res.json(workouts);
});

//get last 7 workouts and aggregate exercise duration
router.get('/workouts/range', async (req, res) => {
    const latest = await db.Workout.aggregate([
        {$sort: {day: -1}},
        {$limit: 7},
        {$addFields: { totalDuration: { $sum: '$exercises.duration'}}}
    ]);

    res.json(latest);
});

//create new empty workout
router.post('/workouts', async (req, res) => {
    const newWorkout = await db.Workout.create(req.body);

    res.json(newWorkout);
});

//add exercise to current workout
router.put('/workouts/:id', async (req, res) => {
    const updatedWorkout = await db.Workout.updateOne(
        {_id: req.params.id},
        {$push: {exercises: req.body}}
    );

    res.json(updatedWorkout);
});


module.exports = router;