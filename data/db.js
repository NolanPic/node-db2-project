const db = require('./dbConfig');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
}

function get() {
    return db('cars')
        .select('*');
}

function getById(id) {
    return db('cars')
        .select('*')
        .where({ id })
        .first();
}

function insert(car) {
    return db('cars')
        .insert(car);
}

function update(id, updates) {
    return db('cars')
        .where({ id })
        .update(updates);
}

function remove(id) {
    return db('cars')
        .where({ id })
        .delete();
}
