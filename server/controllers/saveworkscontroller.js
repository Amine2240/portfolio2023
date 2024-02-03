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
        const existingWork = await Workmodel.findOne({ id: item.id });

        if (!existingWork) {
          const result = await cloudinary.uploader.upload(item.image);

          let newitem = { ...item, image: result.url };

          if (item.type == "mobile") {
            const result2 = await cloudinary.uploader.upload(item.image2);
            const newitem2 = { ...newitem, image2: result2.url };
            newitem = newitem2;
          }
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
