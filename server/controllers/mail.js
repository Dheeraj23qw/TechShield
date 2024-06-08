const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rahulkumar9508820247@gmail.com', 
    pass: 'rfnkweognmagmmnw', 
  },
});

const MailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Mailgen",
    link: "https://mailgen.js/",
  },
});

const registermail = async (req, res) => {
  try {
    const { email, firstName, lastName } = req.body;

    const emailContent = {
      body: {
        name: `${firstName} ${lastName}`,
        intro: `Welcome to our platform, ${firstName}! We're excited to have you on board.`,
        action: {
          instructions: "To get started, please click the button below:",
          button: {
            color: "#22BC66",
            text: "Confirm your account",
            link: "https://example.com/confirm_account",
            
          },
        },
        outro:
          "If you have any questions or need assistance, feel free to contact us.",
      },
    };

    const emailBody = MailGenerator.generate(emailContent);

    const mailOptions = {
      from: 'rahulkumar9508820247@gmail.com',
      to: email,
      subject: "Welcome to our platform!",
      html: emailBody,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email. Error: " + error.message);
  }
};

module.exports = registermail;
