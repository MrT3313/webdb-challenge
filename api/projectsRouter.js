// IMPORTS
    const express = require('express')

// KNEX version of DB
    const DB_KNEX = require('../data/dbConfig')

// ROUTER
    const router = express.Router()

// - GET - //
    // - A - // All Projects
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

// JOIN --> and return project w/ action 


    router.get('/:id', async (req,res) => {
        console.log('projectsRouter GET/:id')
        const { id } = req.params

        const FoundProject = await DB_KNEX('projects')
            .where('id', id)
            console.log('FOUND PROJECT', FoundProject)

        const FoundActions = await DB_KNEX('actions')
            .where('projectID', id)
            console.log('FOUND ACTIONS', FoundActions)

        const objToPass = FoundProject[0]
        objToPass.actions = FoundActions
            console.log('OBJECT TasdfvfbanetfdbdcO PASS', objToPass)

        DB_KNEX('projects')
            .where('id', id)
            .then( projects => {
                res.status(200).json(objToPass)
            }
            )
            .catch()
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