const Clientmodel = require("../schema/clientschema");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const postClientInfo = async (req, res) => {
  try {
    const newclient = new Clientmodel(req.body);
    await newclient.save();

    // const oauth2Client = new google.auth.OAuth2(
    //   "696577845933-vsbnlsiuup7r8h4eddgvv2s19md73dj9.apps.googleusercontent.com",
    //   "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",
    //   "https://developers.google.com/oauthplayground/" // e.g., 'http://localhost:3000/oauth2callback'
    // );
    // oauth2Client.setCredentials({
    //   refresh_token:
    //     "1//04a0rv73uu17NCgYIARAAGAQSNwF-L9IrK-_IaHKbNxqz7ZaoMqof3oHKiig4iXoCu5CYOIvTkmzAlDY5NVHz77PKBkS8Z2bKLoo",
    // });
    const transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        
        user: "kadoumamine@gmail.com",
        // type: "OAuth2",
        // clientId:
        //   "696577845933-vsbnlsiuup7r8h4eddgvv2s19md73dj9.apps.googleusercontent.com",
        // clientSecret: "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",
        // refreshToken:
        //   "1//04a0rv73uu17NCgYIARAAGAQSNwF-L9IrK-_IaHKbNxqz7ZaoMqof3oHKiig4iXoCu5CYOIvTkmzAlDY5NVHz77PKBkS8Z2bKLoo",
        //   accessToken: oauth2Client.getAccessToken(),
        pass: process.env.APPLICATION_PASSWORD,
    
      },
      tls: {
        rejectUnauthorized: false, // Ignore self-signed certificate
      },
    });

    const mailoptions = {
      from: "kadoumamine@gmail.com",
      to: ["kadoumamine@gmail.com", "ma_kadoum@esi.dz"],
      subject: "Client Submittion",
      text: `name : ${req.body.name}\nemail : ${req.body.email}\nneed : ${req.body.need}`,
    };
    await transporter.sendMail(mailoptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("email sent :", info.response);
      }
    });
    console.log(req.body);
    return res.status(200).json(req.body);
  } catch (error) {
    return res.json(error); 
  }
};

module.exports = postClientInfo;
