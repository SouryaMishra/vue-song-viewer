const { register, login } = require("./controllers/authController");
const { getAll, post, getById } = require("./controllers/songsController");
const { validate } = require("./validations/authValidator");

module.exports = (app) => {
  app.get("/", (_, res) =>
    res.json({ message: "Hello, have a great day ahead" })
  );

  app.post("/register", validate, register);

  app.post("/login", login);

  app.get("/songs", getAll);

  app.get("/songs/:songId", getById);

  app.post("/song", post);
};
