// IMPORTS
const express = require('express')

// KNEX version of DB
    const DB_KNEX = require('../data/dbConfig')

// ROUTER
    const router = express.Router()

// - GET - //
    // - A - // All Projects
    router.get('/', async (req, res) => {
        console.log('actionsRouter GET/')

        DB_KNEX('actions')
            .then( actions => {
                res.status(200).json(actions)
            })
            .catch( () => {
                res.status(500).json({ error: `GET/ -> Could not get ALL actions`})
            })
    })
// - POST - //
    /* ACCEPTED SHAPE
        {
            "projectID": INTEGER,
            "name": STRING,
            "description": STRING,
            "notes": STRING,
            "completed": BOOLEAN
        }
    */
    router.post('/', async (req,res) => {
        console.log('actionsRouter POST/')

        DB_KNEX('actions')
            .insert(req.body)
            .then( results => {
                res.status(200).json(results)
            })
            .catch( () => {
                res.status(500).json({ error: `POST/ -> Could not INSERT new ACTION`})
            })
    })
// - PUT - //
// - DELETE - //

// EXPORTS
    module.exports = router