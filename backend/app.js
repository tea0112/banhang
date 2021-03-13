const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const sanPhamRouter = require('./routes/sanPhamRouter');
const authRouter = require('./routes/authRouter');
const verifyToken = require('./middlewares/verifyToken');
const quyenRouter = require('./routes/quyenRouter');
const nguoiDungRouter = require('./routes/nguoiDungRouter');
const danhMucRouter = require('./routes/danhMucRouter');

const app = express();

app.use(morgan('dev'));

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));

app.use('/api/v1/auth', authRouter);

app.use('/api/v1/nguoidung', nguoiDungRouter);

app.use('/api/v1/quyen', verifyToken, quyenRouter);

app.use('/api/v1/danhmuc', danhMucRouter);

app.use('/api/v1/sanpham', sanPhamRouter);

module.exports = app;
