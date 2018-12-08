const prodConfig = require("./config.prod");

const defaultConfig = {
    // Database connection config
    db: {
        // most of the cases this will be localhost
        // unless you are connecting to remote database
        host: "localhost",

        // name of the database connecting to
        name: "todo",

        // database username
        user: "johndoe",

        // password for above database user
        password: "johndoe@123",

        // we are using Sequelize for connecting to database
        // Sequelize supports Mysql, SQlite, PostgreSQL and MSSQL
        // As applicable use either of 'mysql'|'sqlite'|'postgres'|'mssql'
        dialect: "mysql"
    },
    
    // A unique key used for signing JWT token
    // Please replace below key with your own
    JWTKey: "NL(K(]`R6u%_hSg",

    // PORT to run our express app
    httpPort: 3000
};

module.exports = {
    ...defaultConfig,
    ...prodConfig
};