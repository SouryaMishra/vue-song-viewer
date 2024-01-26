const { register } = require("./controllers/authController");

module.exports = (app) => app.post("/register", register);
