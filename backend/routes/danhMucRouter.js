const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const danhMucController = require('../controllers/danhMucController');

const Router = express.Router();

Router.use(verifyToken);

Router.post('/', danhMucController.add);

Router.get('/parent', danhMucController.getAllParent);

Router.get('/child', danhMucController.getAllChild);

Router.delete('/', danhMucController.deleteOne);

module.exports = Router;
