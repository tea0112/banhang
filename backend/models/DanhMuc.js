const mongoose = require('mongoose');

const danhMucSchema = mongoose.Schema({
  ten: {
    type: String,
    required: [true, 'must have ten'],
    unique: true,
  },
  parent: {
    type: String,
  },
});

module.exports = mongoose.model('DanhMuc', danhMucSchema);
