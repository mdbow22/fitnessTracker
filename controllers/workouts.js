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

module.exports = router;