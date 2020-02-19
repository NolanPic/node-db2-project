
exports.up = function (knex) {
    knex.schema.renameTable('car-dealer', 'cars');
};

exports.down = function (knex) {
    knex.schema.renameTable('cars', 'car-dealer');
};
