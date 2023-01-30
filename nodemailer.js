const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "yourprankapp@outlook.it",
    pass: "Z123456a!!!",
  },
});

const options = {
  from: "yourprankapp@outlook.it",
  to: "davidelopresti0129@gmail.com",
  subject: "this is youre prank!",
  text: "the prank!!!",
};

transporter.sendMail(options, (err, info) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("sent: " + info.response);
});
