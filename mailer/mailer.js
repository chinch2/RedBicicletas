const nodemailer = require("nodemailer");

const mailConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "dylan.jacobs98@ethereal.email",
    pass: "jTk7tcDf1bTzA2BWNp"
  }
};

const mailConfigGmail = {
  service: "gmail", //smtp.gmail.com //in place of service use host...
  auth: {
    user: "biciargu@gmail.com",
    pass: "biciargu.123"
  }
};

module.exports = nodemailer.createTransport(mailConfig);
