const nodemailer = require("nodemailer");

const mailConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "helmer.cummerata13@ethereal.email",
    pass: "yCJZZfD4UDhK3NARtr"
  }
};

module.exports = nodemailer.createTransport(mailConfig);
