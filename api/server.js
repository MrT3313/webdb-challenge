// EXPRESS
    const express = require('express')

// SERVER
    const server = express()
    server.use(express.json())

// HOMEPAGE ROUTING
    server.get('/', (req,res) => {
        res.json({ message: 'WebDB SPRINT Server Is Working!'})
    })

// EXPORTS
    module.exports = server