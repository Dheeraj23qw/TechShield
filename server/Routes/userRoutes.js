const express = require("express");

const path = require("path");
const multer = require("multer");

const {
  handleregister,
  handlelogin,
  handleuserName,
} = require("../controllers/userController.js");

const { auth } = require("../middleware/auth.js");

const registermail = require("../controllers/mail.js");

const router = express.Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'userpic');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

router.post("/register", handleregister);

router.post("/sendmail", registermail);

router.post("/login", handlelogin);

router.get("/user/:username", handleuserName);

module.exports = router;
