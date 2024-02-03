const knex = require('knex');
const knexConfig = require('../knexfile');

if (process.env.NODE_ENV === 'production') {
  module.exports = knex(knexConfig.production);
} else {
  module.exports = knex(knexConfig.development);
}
