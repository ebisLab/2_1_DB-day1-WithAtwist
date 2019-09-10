const express = require('express');
// const Project = require('../data/helpers/projectModel')
const router = express.Router();
const db = require('../data/dbConfig.js');
router.use(express.json());

router.get('/', (req, res) => {
    // res.status(200).json({ api: 'Hello world' })
    db.select('*').from('accounts')
        .then(acc => { res.status(200).json(acc) })
        .catch(err => { res.json(err) })

    // res.status(200).json({ api: '...up' })
})

module.exports = router;