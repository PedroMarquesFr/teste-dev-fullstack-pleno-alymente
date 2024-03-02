require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'files_api',
    host: process.env.HOSTNAME,
    dialect: 'sqlite',
    storage: 'database.db'
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'files_api',
    host: process.env.HOSTNAME,
    dialect: 'sqlite',
    storage: 'database.db'
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'files_api',
    host: process.env.HOSTNAME,
    dialect: 'sqlite',
    storage: 'database.db'
  },
};
