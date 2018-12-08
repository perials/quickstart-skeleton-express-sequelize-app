const Sequelize = require("sequelize");
const EmployeeModel = require("./models/employee.model");
const config = require("./config/config");

// initialize database connection
const sequelize = new Sequelize(
    config.db.name, // database name
    config.db.user, // user
    config.db.password, // password
    {
        host: config.db.host,
        dialect: config.db.dialect,
        operatorsAliases: false,
        timezone: "+00:00" // set time zone to UTC
    }
);

// check database connection
sequelize
    .authenticate()
    .then(() => {
        // eslint-disable-next-line
        console.log("Connection has been established successfully.");
    })
    .catch(err => {
        // eslint-disable-next-line
        console.error("Unable to connect to the database:", err);
    });

const Employee = EmployeeModel(sequelize, Sequelize);
module.exports = {
    "EmployeeModel": Employee
};
