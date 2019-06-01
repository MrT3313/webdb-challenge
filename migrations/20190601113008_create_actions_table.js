
exports.up = function(knex) {
    return knex.schema.createTable('actions', table => {
        table.increments('id')
        table
            .string('description')
            .notNullable()
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
