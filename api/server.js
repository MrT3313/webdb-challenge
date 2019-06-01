// EXPRESS
    const express = require('express')

// ROUTERS
    const projectsRouter = require('./projectsRouter')
    const actionsRouter = require('./actionsRouter')

// SERVER
    const server = express()
    server.use(express.json())

// HOMEPAGE ROUTING
    server.get('/', (req,res) => {
        res.json({ message: 'WebDB SPRINT Server Is Working!'})
    })

// INDIVIDUAL ROUTES
    server.use('/api/projects', projectsRouter)
    server.use('/api/actions', actionsRouter)

// EXPORTS
    module.exports = server