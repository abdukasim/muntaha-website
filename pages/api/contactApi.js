import nodemailer from "nodemailer";

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.CONTACT_USER,
      pass: process.env.password,
    },
    secure: true,
  });
  const mailData = {
    from: process.env.CONTACT_USER,
    to: process.env.MAIN_USER,
    subject: `Message From ${body.firstName + body.lastName}`,
    text: body.message + " | Sent from: " + body.email,
    html: `<div>${body.message}</div><p>Sent from:
    ${body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
  });

  res.status(200).json({ status: "OK" });
}
