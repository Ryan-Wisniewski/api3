const express = require('express')

const server = express()
// server.use('express')

server.get('/', (req, res) => {
    res.status(200).json({ sanity: 'check'})
});

module.exports = server