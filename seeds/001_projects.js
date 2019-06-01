exports.seed = async function(knex) {
    await knex('projects').insert([
        {   id: 1, name: 'Resume Overhaul', 
            description: 'Prepare a standard (plain) version of your resume & a styled (webDev) version', 
            completed: 0
        },
        {   id: 2, name: 'Clean Apt', 
            description: 'Vaccume / Dishes / Bathroom / Laundry',
            completed: 0
        },
    ])
};