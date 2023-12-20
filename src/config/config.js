const path = require('path');
require('dotenv').config(({ path: path.join(__dirname, '../../.env') }))
module.exports = {
  "development": {
    "username": process.env.database_username,
    "password": process.env.database_password,
    "database": process.env.database_database,
    "host": process.env.database_host,
    "port" : process.env.database_port,
    "dialect": "mysql"
  }
  // "test": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  // "production": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_production",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // }
}
