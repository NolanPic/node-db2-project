
exports.up = function (knex) {
    return knex.schema.createTable('car-dealer', tbl => {
        tbl.increments(); // primary key/identity column

        tbl
            .string('VIN', 512)
            .notNullable()
            .index();
        
        tbl
            .string('make', 128)
            .notNullable()
            .index();
        
        tbl
            .string('model', 128)
            .notNullable()
            .index();
        
        tbl
            .integer('mileage')
            .defaultTo(0);

        tbl
            .integer('transmission');
        
        tbl
            .integer('title');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('car-dealer');
};
