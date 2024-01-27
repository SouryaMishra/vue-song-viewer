const { User } = require("../models");
const config = require("../config");
const jwt = require("jsonwebtoken");
const { comaparePassword } = require("../utils");

const jwtSignUser = (user) => {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.auth.jwtSecret, { expiresIn: ONE_WEEK });
};

module.exports = {
  async register(req, res) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (user) {
        return res.status(400).send({
          error: "This email is already in use",
        });
      }

      const newUser = await User.create(req.body);
      const newUserJson = newUser.toJSON();
      res.send({
        user: newUserJson,
        token: jwtSignUser(newUserJson),
      });
    } catch (err) {
      res.status(500).send({
        error: "Something went wrong, please try again later",
      });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        return res.status(403).send({
          error: "Invalid credentials",
        });
      }

      const isPasswordValid = await comaparePassword(password, user.password);

      if (!isPasswordValid) {
        return res.status(403).send({
          error: "Invalid credentials",
        });
      }

      const userJSON = user.toJSON();

      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON),
      });
    } catch (err) {
      res.status(500).send({
        error: "Login failed, please try again",
      });
    }
  },
};
