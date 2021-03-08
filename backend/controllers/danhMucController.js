const DanhMuc = require('../models/DanhMuc');

exports.add = (req, res) => {
  const danhmuc = new DanhMuc({
    ...req.body,
  });

  danhmuc
    .save()
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.status(404).json({
        error: err,
      });
    });
};

exports.getAll = async (req, res) => {
  try {
    const danhMucs = await DanhMuc.find({});
    res.status(200).json(danhMucs);
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const exist = await DanhMuc.findOne({
      ten: req.body.ten,
    });
    if (exist) {
      await DanhMuc.deleteOne({
        ten: req.body.ten,
      });
      res.status(200).json();
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.sendStatus(404);
  }
};

exports.getTopFive = async (req, res) => {
  try {
    if (req.body.ten) {
      const regex = `^${req.body.ten}.*`;
      const danhmuc = await DanhMuc.find({
        ten: { $regex: regex },
      }).limit(5);
      res.status(200).json(danhmuc);
    } else res.sendStatus(404);
  } catch (error) {
    res.sendStatus(404).json({
      error,
    });
  }
};
