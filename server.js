const express = require('express');
const Accounts = require('./api/accountsRouter.js')

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
server.use('/accounts', Accounts)



server.get('/', (req, res) => {

    res.status(200).json({ api: '...up' })
})

module.exports = server;