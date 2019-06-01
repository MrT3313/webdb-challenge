// IMPORTS
    const express = require('express')

// KNEX version of DB
    const DB_KNEX = require('../data/dbConfig')

// ROUTER
    const router = express.Router()

// - GET - //
    // - A - // Project by ID
    router.get('/:id', async (req,res) => {
        console.log('projectsRouter GET/:id')
        const { id } = req.params

        DB_KNEX('projects')
            .where('ID', id)
            .then( project => {
                res.status(200).json(project)
            })
            .catch( () => {
                res.status(500).json({ error: `GET/:id -> Could not get PROJECT for ID: ${id}`})
            })
    })    



// - POST - //
// - PUT - //
// - DELETE - //

// EXPORTS
    module.exports = router