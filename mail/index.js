// Use at least Nodemailer v4.1.0
const nodemailer = require("nodemailer");

// Generate SMTP service account from ethereal.email
nodemailer.createTestAccount((err, account) => {
  if (err) {
    console.error("Failed to create a testing account. " + err.message);
    return process.exit(1);
  }

  console.log("Credentials obtained, sending message...");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD, // naturally, replace both with your real credentials or an application-specific password
    },
  });

  // // Create a SMTP transporter object
  // let transporter = nodemailer.createTransport({
  //   host: account.smtp.host,
  //   port: account.smtp.port,
  //   secure: account.smtp.secure,
  //   auth: {
  //     user: account.user,
  //     pass: account.pass,
  //   },
  // });

  // Message object
  let message = {
    from: "DeFi Terminal <info@ethdevalliance.com>",
    to: process.env.MESSAGE_TO,
    subject: process.env.MESSAGE_SUBJECT,
    text: process.env.MESSAGE_TEXT,
    // html: "<p>INSERT MESSAGE</p>",
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log("Error occurred. " + err.message);
      return process.exit(1);
    }

    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
});
