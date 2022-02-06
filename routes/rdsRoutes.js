const express = require('express');
const router = express.Router();
const rds = require('../services/rds');

router.get('/init', async function(req, res, next) {
    try {
        res.json(await rds.createTable());
    } catch (err) {
        console.error(`init `, err.message);
        next(err);
    }
});

router.get('/users', async function(req, res, next) {
    try {
        res.json(await rds.getAll());
    } catch (err) {
        console.error(`get all `, err.message);
        next(err);
    }
});

router.post('/user', async function(req, res, next) {
    try {
        res.json(await rds.addUser(req.body));
    } catch (err) {
        console.error(`add user `, err.message);
        next(err);
    }
});
module.exports = router;