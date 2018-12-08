module.exports = (sequelize, type) => {
    return sequelize.define(
        // here we specify singular name of our db table
        // so employee will be mapped to employee(s) by Sequelize
        "employee",
        {
            // emp_no is primary id
            emp_no: {
                type: type.BIGINT(20),
                primaryKey: true,
                autoIncrement: true
            },
            birth_date: type.DATEONLY,
            hire_date: type.DATEONLY,
            first_name: type.STRING,
            last_name: type.STRING,
            gender: type.ENUM("M", "F")
        },
        {
            timestamps: false
        }
    );
};