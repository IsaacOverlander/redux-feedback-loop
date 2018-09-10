const express = require('express');
const pool = require('../modules/pool.js')
const router = express.Router();

// POST route
router.post('/', (req, res) => {
    feedback = req.body;
    query = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(query, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });// End POST
})
// GET route
router.get('/', (req, res) => {
    query = `SELECT * FROM "feedback" ORDER BY "id" DESC;`;
    pool.query(query).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });// End GET
});
// DELETE route
router.delete('/:id', (req, res) => {
    const query = `DELETE FROM "feedback" WHERE "id" = $1`;
    pool.query(query, [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});;// end DELETE

// PUT route
router.put('/:id', (req, res) => {
    const query = `UPDATE "feedback" SET "flagged" = 'true' WHERE "id" = $1;`;
    pool.query(query, [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
        console.log(error);
    });
});// End PUT

module.exports = router;