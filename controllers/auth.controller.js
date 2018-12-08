const jwt = require("jsonwebtoken");
const { JWTKey } = require("../config/config");

/**
 * Dummy user list for generating token
 */
const mockUsers = {
    "john_doe@abc.com": {
        password: "john123",
        email: "john_doe@abc.com"
    },
    "steve_smith@abc.com": {
        password: "steve123",
        email: "steve_smith@abc.com"
    },
};

/**
 * @api {post} /v1/auth/login Generate JWT token
 * @apiGroup Auth
 * @apiName Login
 * 
 * @apiContentType application/json
 *
 * @apiParam {String} email Email id of user. For testing use john_doe@abc.com OR steve_smith@abc.com
 * @apiParam {String} password Password of user. Use john123 for john_doe@abc.com OR steve123 for steve_smith@abc.com
 */
function login(req, res) {
    // check if email/password combination is valid
    if (!(req.body.email in mockUsers
            && mockUsers[req.body.email].password === req.body.password)) {
        return res
            .status(400)
            .send({
                error: ["Email/Passwords don't exist/match"]
            });
    }
    
    // send response
    res.send({
        data: {
            token: jwt.sign(
                mockUsers[req.body.email],
                JWTKey
            )
        }
    });
}

module.exports = {
    login
};