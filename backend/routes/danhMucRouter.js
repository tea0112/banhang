const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const danhMucController = require('../controllers/danhMucController');

const Router = express.Router();

Router.get('/', danhMucController.getAll);

Router.use(verifyToken);

Router.post('/', danhMucController.add);

Router.delete('/', danhMucController.deleteOne);

module.exports = Router;
