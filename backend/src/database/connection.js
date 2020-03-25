const knex = require('knex');
const configuriton = require('../../knexfile');

const connection = knex(configuriton.development);

module.exports = connection;