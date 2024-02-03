const Workmodel = require("../schema/workschema");

const deleteallworkscontroller = async (req, res) => {
  try {
    await Workmodel.deleteMany({});
    console.log("all works deleted succefully");
    return res.json({ message: "works deleted succefully" });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

module.exports = deleteallworkscontroller;
