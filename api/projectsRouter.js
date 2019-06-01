// IMPORTS
    const express = require('express')

// KNEX version of DB
    const DB_KNEX = require('../data/dbConfig')

// ROUTER
    const router = express.Router()

// - GET - //
    // - A - // Project by ID
    router.get('/', async (req,res) => {
        console.log('projectsRouter GET/')

        DB_KNEX('projects')
            .then( projects => {
                res.status(200).json(projects)
            })
            .catch( () => {
                res.status(500).json({ error: `GET/ -> Could not get ALL projects`})
            })
    })
    // - B - // Project by ID
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
    /* ACCEPTED SHAPE 
        {
            "name": STRING,
            "description": STRING,
            "completed": BOOLEAN
        }   
    */
    router.post('/', async (req, res) => {
        DB_KNEX('projects')
            .insert(req.body)
                .then( results => {
                    res.status(201).json(results)
                })
                .catch( () => {
                    res.status(500).json({ error: `POST/ --> Could not INSERT new PROJECT`})
                })
                
    })

// - PUT - //
// - DELETE - //

// EXPORTS
    module.exports = router