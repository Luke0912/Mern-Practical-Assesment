const User = require("../models/users.model.js");

const jwt = require("jsonwebtoken");

require("dotenv").config();

const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    const { email } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({ message: "Email already there" });
    }
    user = await User.create(req.body);
    const token = newToken(user);
    return res.status(200).send({ user, token });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).send("wrong email or password");
    }

    const match = user.checkPassword(req.body.password);

    if (!match) {
      return res.status(400).send({ message: "wrong user or password" });
    }

    const token = newToken(user);
    return res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { login, register, newToken };
