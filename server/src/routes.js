const { register } = require("./controllers/authController");
const { validate } = require("./validations/authValidator");

module.exports = (app) => app.post("/register", validate, register);
