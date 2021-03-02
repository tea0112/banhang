const express = require('express');
const quyenController = require('../controllers/quyenController');

const Router = express.Router();

Router.route('/')
  .get(quyenController.getAllQuyens)
  .post(quyenController.createQuyen);

module.exports = Router;
