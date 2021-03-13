const express = require('express');

const add = (Model, customData) => async (
  req = express.request,
  res = express.response
) => {
  // console.log(req);
  try {
    const model = new Model({
      ...req.body,
      ...customData,
    });

    await model.save().then(() => {
      res.sendStatus(201);
    });
  } catch (error) {
    res.status(404).json({ error });
  }
};

module.exports = add;
