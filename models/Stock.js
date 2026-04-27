const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
 productName : {
    type: String,
    trim: true,
  },
  productCode: {
    type: String,
    trim: true,
  },
  quantity: {
    type: Number,
    
  },
  buyingPrice: {
type: Number,
  },
  sellingPrice: {
type: Number,
  },
  date: {
type: Date,
  },
  Total: {
    type: Number,
  }
});

module.exports = mongoose.model("Stock", StockSchema);