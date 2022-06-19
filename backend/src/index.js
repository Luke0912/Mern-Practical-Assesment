const express = require("express");

const {
  register,
  login,
  newtoken,
} = require("./controllers/auth.controller.js");

const {
  getProduct,
  createProduct,
  getuserProduct,
  editProduct,
} = require("./controllers/product.controller.js");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/product", getProduct);

router.get("/product/:userId", getuserProduct);

router.post("/createproduct", createProduct);

router.patch("/product/:id", editProduct);

module.exports = router;
