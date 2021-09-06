const mongoose = require("mongoose");

const Product = new mongoose.Schema(
    {
        productname:{
            type: String,
            required: [true,"Enter full name"],
            trim: true
        },
        price:{
            type: String,
            required: [true,"Enter price"],
        },
        producttype:{
            type: String,
            required: [true,"Select Gender"],
            trim: true
        },
        description:{
            type: String,
            required: [true,"Enter description"],
            trim: true
        },
        photo: {
            type: String,
            default: "no-photo.jpg",
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
    }
);

module.exports = mongoose.model("Product",Product);
