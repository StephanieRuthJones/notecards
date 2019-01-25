

exports.up = function (knex, Promise) {
    return knex.schema.createTable('methods', table => {
        table.increments()
        table.string('syntax').notNullable().defaultsTo('')
        table.string('name').notNullable().defaultsTo('')
        table.text('description').notNullable().defaultsTo('')
        table.text('example').notNullable().defaultsTo('')
        table.text('link').notNullable().defaultsTo('')

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('methods')
};
