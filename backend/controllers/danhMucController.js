const DanhMuc = require('../models/DanhMuc');
const getSearchResult = require('./crud/getSearchResult');
const add = require('./crud/add');
const getAll = require('./crud/getAll');
const deleteOne = require('./crud/deleteOne');
const paginate = require('./crud/paginate');
const SanPham = require('../models/SanPham');

exports.add = add(DanhMuc);

exports.getAll = getAll(DanhMuc);

exports.deleteOne = deleteOne(DanhMuc, 'ten');

exports.getSearchResult = getSearchResult(DanhMuc, 'ten', 'params', 5);

exports.paginate = paginate(SanPham, ['thuocDanhMuc'], 30);
