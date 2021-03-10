const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const permit = require('../middlewares/permit');
const sanPhamController = require('../controllers/sanPhamController');

const Router = express.Router();

Router.use(verifyToken);

Router.use(permit('admin'));

Router.post('/', sanPhamController.add);

Router.patch('/', sanPhamController.update);

Router.delete('/:ten', sanPhamController.deleteOne);

Router.get('/', sanPhamController.getSearchResult);

module.exports = Router;
