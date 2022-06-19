const mongoose = require("mongoose");

const httpStatus = require("http-status");

const Product = require("../models/product.model");
const { OK } = require("http-status");

const getProduct = async (req, res, err) => {
  try {
    const product = await Product.find().lean().exec();
    res.status(httpStatus.OK).send(product);
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).send({ message: err.message });
  }
};

const getuserProduct = async (req, res, err) => {
  try {
    const { userId } = req.params;
    var product = await Product.find({ userId: userId });
    res.status(httpStatus.OK).send(product);
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).send({ message: err.message });
  }
};

const editProduct = async (req, res, err) => {
  try {
    var product = await Product.findByIdAndUpdate(req.params.id, req.body);
    var nProduct = await Product.findById(req.params.id);
    res.status(httpStatus.OK).send(nProduct);
    console.log(req.params.id);
    console.log(req.body);
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).send({ message: err.message });
  }
};

const createProduct = async (req, res, err) => {
  try {
    const product = await Product.create(req.body);
    return res.status(httpStatus.OK).send(product);
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).send({ message: err.message });
  }
};

module.exports = { getProduct, createProduct, getuserProduct, editProduct };
