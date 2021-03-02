const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRouter');
const verifyToken = require('./middlewares/verifyToken');
const quyenRouter = require('./routes/quyenRouter');
const nguoiDungRouter = require('./routes/nguoiDungRouter');
const danhMucRouter = require('./routes/danhMucRouter');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/api/v1/auth', authRouter);

app.use('/api/v1/nguoidung', nguoiDungRouter);

app.use('/api/v1/quyen', verifyToken, quyenRouter);

app.use('/api/v1/danhmuc', danhMucRouter);

module.exports = app;
