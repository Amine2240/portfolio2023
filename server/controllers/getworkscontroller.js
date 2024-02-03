const Workmodel = require("../schema/workschema");

const getallworks = async (req, res) => {
  try {
    const allworks = await Workmodel.find({});
    if (!allworks) {
      return res.json("no item found");
    }
    return res.json(allworks);
  } catch (error) {
    return res.json(error);
  }
};

module.exports = getallworks;
