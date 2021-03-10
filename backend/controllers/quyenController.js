const Quyen = require('../models/Quyen');
const add = require('./crud/add');
const getAll = require('./crud/getAll');

exports.getAll = getAll(Quyen);

exports.add = add(Quyen);
