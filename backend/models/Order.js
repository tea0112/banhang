const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
  product: ObjectId,
  quantity: Number,
});

const orderSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'must have email'],
    unique: true,
  },
  products: [productsSchema],
});

module.exports = mongoose.model('Order', orderSchema);
