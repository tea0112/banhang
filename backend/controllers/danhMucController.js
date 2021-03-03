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
      res.status(401).json({
        error: err,
      });
    });
};

exports.getAll = async (req, res) => {
  try {
    const danhMucs = await DanhMuc.find({});
    res.status(200).json(danhMucs);
  } catch (error) {
    res.status(401).json({
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
      await DanhMuc.deleteMany({
        $or: [{ ten: 'dầu ăn, gia vị' }, { parent: 'dầu ăn, gia vị' }],
      });
      res.status(200).json();
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.sendStatus(404);
  }
};
