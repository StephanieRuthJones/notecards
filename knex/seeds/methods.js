exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('methods').del()
        .then(function () {
            // Inserts seed entries
            return knex('methods').insert([
                { id: 1, name: 'push' },
                { id: 2, name: 'pop' },
                { id: 3, name: 'splice' }
            ]);
        });
};