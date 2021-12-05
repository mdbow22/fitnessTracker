const router = require('express').Router();
const db = require('../models');

router.get('/workouts/range', async (req, res) => {
    const latest = await db.Workout.aggregate([
        {$sort: {day: -1}},
        {$limit: 7},
        {$addFields: { totalDuration: { $sum: '$exercises.duration'}}}
    ]);

    res.json(latest);
});

module.exports = router;