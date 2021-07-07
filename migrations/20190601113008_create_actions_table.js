
exports.up = function(knex) {
    return knex.schema.createTable('actions', table => {
        table.increments('id')
        table
            .integer('projectID')
            .references('id').inTable('projects')
                .onDelete('CASCADE').onUpdate('CASCADE')
        table
            .string('name')
            .notNullable()
        table
            .string('description')
        table
            .string('notes')
        table
            .boolean('completed')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('actions')
};
