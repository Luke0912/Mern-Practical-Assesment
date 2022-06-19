const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    name: { type: String, required: true },
    price: { type: String, required: true },
    origin: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);
