// const nodemailer = require("nodemailer");

// router.post("/prank", async (req, res) => {
//   const { email, time, place, name } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: "hotmail",
//     auth: {
//       user: "yourprankapp@outlook.it",
//       pass: "Z123456a!!!",
//     },
//   });

//   const options = {
//     from: "yourprankapp@outlook.it",
//     to: { email },
//     subject: "πππFree pizza!",
//     text: `π Dear ${name} is youre lucky day!
//     π You have been selected to come to oure free all you can eat pizza party!
//     π We are looking forward to see you at ${time} in ${place}!
//     π See you there tanti abbracci from youre pizza place preferito.π `,
//   };

//   transporter.sendMail(options, (err, info) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log("sent: " + info.response);
//   });
// });
