const express = require('express');
const SanPham = require('../models/SanPham');
const getSearchResult = require('./crud/getSearchResult');
const add = require('./crud/add');
const deleteOne = require('./crud/deleteOne');
const update = require('./crud/update');
const importFile = require('./crud/import');
const paginate = require('./crud/paginate');
const sort = require('./crud/sort');

exports.add = add(SanPham, { ngayTao: new Date() });

exports.update = update(SanPham, 'ten');

exports.deleteOne = deleteOne(SanPham, 'ten');

exports.getSearchResult = getSearchResult(SanPham, 'ten', 'query', 5);

exports.importSanPham = importFile(SanPham);

exports.sortSanPham = sort(SanPham);
