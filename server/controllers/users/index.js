const signup = require('./signup.js'); 
const signin = require('./login.js');

const userController = {
	signup,
	signin,
}

module.exports = userController;