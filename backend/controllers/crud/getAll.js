const getAll = (Model) => async (req, res) => {
  try {
    const instances = await Model.find({});
    res.status(200).json(instances);
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};

module.exports = getAll;
