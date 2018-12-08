const BaseJoi = require("joi");
const Extension = require("joi-date-extensions");
const Joi = BaseJoi.extend(Extension);

module.exports = {
    create: {
        body : Joi.object().keys({
            empNo: Joi.number().required().label("Employee Number"),
            hireDate: Joi.date().format("YYYY-MM-DD").required().label("Hire Date"),
            birthDate: Joi.date().format("YYYY-MM-DD").required().label("Birth Date"),
            firstName: Joi.string().min(2).max(255).required().label("First Name"),
            lastName: Joi.string().min(2).max(255).required().label("Last Name"),
            gender: Joi.any().valid("M", "F").required().label("Gender")
        })
    }
};