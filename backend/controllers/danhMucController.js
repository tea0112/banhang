const DanhMuc = require('../models/DanhMuc');
const getSearchResult = require('./crud/getSearchResult');
const add = require('./crud/add');
const getAll = require('./crud/getAll');
const deleteOne = require('./crud/deleteOne');

exports.add = add(DanhMuc);

exports.getAll = getAll(DanhMuc);

exports.deleteOne = deleteOne(DanhMuc, 'ten');

exports.getSearchResult = getSearchResult(DanhMuc, 'ten', 'params', 5);
