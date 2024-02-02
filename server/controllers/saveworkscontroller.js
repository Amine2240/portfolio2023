const Workmodel = require("../schema/workschema");
const works = require("../works");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const saveworkscontroller = async (req, res) => {
  try {
    for (const item of works) {
      try {
        // Check if the work already exists in the database
        const existingWork = await Workmodel.findOne({ title: item.title });

        if (!existingWork) {
          const result = await cloudinary.uploader.upload(item.image);
          const newitem = { ...item, image: result.url };
          const newwork = new Workmodel(newitem);
          await newwork.save();
          console.log(newitem);
        }
      } catch (error) {
        console.log(error);
      }
    }
    return res.status(200).json({ message: "Works saved successfully" });
  } catch (error) {
    return res.json(error);
  }
};

module.exports = saveworkscontroller;
