const express = require("express");
const path = require('path');
const multer = require('multer');
const { handleFormSubmission ,handleGetForm,handleGetAll,handleContact,handleFir,handleGetMsg,handleSaveMsg} = require("../controllers/form");

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });


router.post("/", upload.single('coverImage'), handleFormSubmission);

router.post("/contactform", handleContact);
router.post("/fir", handleFir);
router.get("/mypost/:id", handleGetForm);
router.get("/allpost", handleGetAll);
router.get("/getmsg", handleGetMsg);
router.post("/savemsg",handleSaveMsg);
module.exports = router;
