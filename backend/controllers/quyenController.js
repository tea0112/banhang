const Quyen = require('../models/Quyen');

exports.getAllQuyens = async (req, res) => {
  try {
    const quyens = await Quyen.find({}).exec();
    res.status(200).json({ quyens });
  } catch (error) {
    res.status(401).json({
      status: 'fail',
      error,
    });
  }
};

exports.createQuyen = async (req, res) => {
  try {
    const quyen = new Quyen(req.body);

    await quyen.save();

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
};
