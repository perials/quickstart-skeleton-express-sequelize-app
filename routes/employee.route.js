const express = require("express");
const router = express.Router();
const EmployeeValidationRules = require("../validation-rules/employee.rule");
const validateMiddleware = require("../middlewares/validate.middleware");
const EmployeeController = require("../controllers/employee.controller");
// below line has to be added in every route file
// this is perhaps some bug in express-async-errors
// adding below line only once in index.js doesn't works
require("express-async-errors");

router.get("/", EmployeeController.getAll);
router.post("/", validateMiddleware(EmployeeValidationRules.create), EmployeeController.create);

module.exports = router;