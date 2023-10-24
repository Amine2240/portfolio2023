const Clientmodel = require("../schema/clientschema");
const nodemailer = require("nodemailer");

const postClientInfo = async (req, res) => {
  try {
    const newclient = new Clientmodel(req.body);
    await newclient.save();
    const transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kadoumamine@gmail.com",
        pass: "yeythzuopskivnah",
      },
      tls: {
        rejectUnauthorized: false, // Ignore self-signed certificate
      },
    });

    const mailoptions = {
      from: req.body.email,
      to: ["kadoumamine@gmail.com", "ma_kadoum@esi.dz"],
      subject: "client submittion",
      text: `name : ${req.body.name}\nemail : ${req.body.email}\nneed : ${req.body.need}`,
    };
    await transporter.sendMail(mailoptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("email sent :", info.response);
      }
    });
    return res.json(req.body);
  } catch (error) {
    return res.json(error);
  }
};

module.exports = postClientInfo;
