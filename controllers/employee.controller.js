const { EmployeeModel } = require("../db");

/**
 * @api {get} /v1/employee/ Get all employee list
 * @apiGroup Employee
 * @apiName GetAllEmployees
 *
 * @apiHeader {String} token JWT token geneated from /login
 *
 * @apiParam {Number} skip Offset useful for pagination
 * @apiParam {Number} limit No of entries to fetch
 */
async function getAll(req, res) {
    // TODO - Add Joi validation for skip and limit
    
    // if skip in query string use it else default to 0
    const offset = +req.query.skip ? +req.query.skip : 0;

    // if limit in query string then use it else default to 10
    const limit = +req.query.limit ? +req.query.limit : 10;

    // fetch from database
    const employees = await EmployeeModel
        .findAll({
            limit,
            offset
        });
    
    // send response
    res.send({
        data: {
            employees
        }
    });
}

/**
 * @api {post} /v1/employee/ Create new employee
 * @apiGroup Employee
 * @apiName CreateNewEmployee
 *
 * @apiHeader {String} token JWT token geneated from /login
 *
 * @apiParam {Number} empNo Employee Number
 * @apiParam {String} birthDate Birth date in YYYY-mm-dd eg: 2002-12-30
 * @apiParam {String} firstName
 * @apiParam {String} lastName
 * @apiParam {String} gender Can be either M or F
 * @apiParam {String} hireDate Date when hired. In YYYY-mm-dd format eg: 2002-12-30
 */
async function create(req, res) {
    // TODO - Add validation
    
    const employee = await EmployeeModel.create({
        emp_no: req.body.empNo,
        birth_date: req.body.birthDate,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        gender: req.body.gender,
        hire_date: req.body.hireDate
    });

    res.send({
        data: {
            empNo: employee.emp_no
        }
    });
}

module.exports = {
    getAll,
    create
};