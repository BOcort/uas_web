// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: process.env.database_host,
      port: process.env.database_port,
      user: process.env.database_username,
      password: process.env.database_password,
      database: process.env.database_database
    },
    migrations: {
      tableName: 'data'
    }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
