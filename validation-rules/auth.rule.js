var Joi = require("joi");

module.exports = {
    login: {
        body : Joi.object().keys({
            email: Joi.string().email({ minDomainAtoms: 2 }).required().label("Email address"),
            password: Joi.string().required().label("Password"),
        })
    }
};