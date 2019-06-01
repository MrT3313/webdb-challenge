exports.seed = async function(knex) {
    await knex('actions').insert([
        {   id: 1, projectID: 1,
            name: 'Draw Outline', 
            description: '', 
            notes:'these are notes',
            completed: 0
        },
        {   id: 2, projectID: 2,
            name: 'Laundry', 
            description: 'get all dirty clothes / wash them', 
            notes:'these are notes',
            completed: 0
        },

    ])
};