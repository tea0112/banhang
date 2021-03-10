const express = require('express');

const getSearchResult = (model, identify, queryType, numberOfResult) => async (
  req = express.request,
  res = express.response
) => {
  let query;
  if (queryType === 'params') query = req.params[identify];
  else if (queryType === 'query') query = req.query[identify];
  else throw 'not found query type';

  try {
    if (query) {
      const regex = `^${query}.*`;
      await model
        .find({
          ten: { $regex: regex },
        })
        .limit(numberOfResult)
        .then((data) => res.status(200).json(data));
    } else res.sendStatus(404);
  } catch (error) {
    res.sendStatus(404).json({
      error,
    });
  }
};

module.exports = getSearchResult;
