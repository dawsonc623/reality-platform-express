// Load .env
require("dotenv").config();

module.exports  = {
  "development" : {
    "host"      : process.env.DB_HOST_DEV,
    "database"  : process.env.DB_NAME_DEV,
    "password"  : process.env.DB_PASS_DEV,
    "dialect"   : process.env.DB_TYPE_DEV,
    "username"  : process.env.DB_USER_DEV
  },
  "test"  : {
    "host"      : process.env.DB_HOST_TEST,
    "database"  : process.env.DB_NAME_TEST,
    "password"  : process.env.DB_PASS_TEST,
    "dialect"   : process.env.DB_TYPE_TEST,
    "username"  : process.env.DB_USER_TEST
  },
  "production"  : {
    "host"      : process.env.DB_HOST_PROD,
    "database"  : process.env.DB_NAME_PROD,
    "password"  : process.env.DB_PASS_PROD,
    "dialect"   : process.env.DB_TYPE_PROD,
    "username"  : process.env.DB_USER_PROD
  }
}

