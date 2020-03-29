const knex = require('knex');
const configuriton = require('../../knexfile');

const config = process.env.NODE_ENV == 'test' ? configuriton.test : configuriton.development; 

const connection = knex(config);

module.exports = connection;