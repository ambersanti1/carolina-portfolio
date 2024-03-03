const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");


router.post("/contact", async (req, res) => {
  const { email, name, message } = req.body;
  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "carolinasandoval879@gmail.com",
        pass: "ofip vhbo spyb ffwm",
      },
    });

    const mailOptions = {
      from: email,
      to: 'carolinasandoval879@gmail.com',
      subject: `Request from ${name}`,
      text: `${message}
      ${email}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({ message: "Error sending email" });
      } else {
        return res.json({ status: true, message: "Email sent" });
      }
    });
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;
