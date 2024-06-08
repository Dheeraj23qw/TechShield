const user = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ENV = require("../config.js");
const otpGenerator = require("otp-generator");

const saltOrRounds = 10;

// middleware for verify user

async function verifyUser(req, res, next) {
  try {
    const { username } = req.method == "GET" ? req.query : req.body;
    //check the user existence in the database...
    const existUser = await user.findOne({ username });

    if (!existUser) return res.status(404).send({ error: "User not found" });
    next();
  } catch (error) {
    return res.status(404).send({
      error: "Authentication error",
    });
  }
}

async function handleregister(req, res) {
  try {
    const { username, password, email } = req.body;

    const existUser = await user.findOne({ email });
    if (existUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new user({
      username,
      password: hashedPassword,
      email,
    });

    await newUser.save();

    return res.status(201).json({
      msg: "User created successfully",
    });
  } catch (err) {
    console.error("Error in registration:", err);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}

async function handlelogin(req, res) {
  try {
    const { username, password } = req.body;

    // Check if all required fields are provided
    if (!username || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const existuser = await user.findOne({ username });

    if (!existuser) {
      return res.status(400).json({ msg: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, existuser.password);

    if (passwordMatch) {
      // Create JWT token
      const token = jwt.sign(
        {
          username: existuser.username,
          userId: existuser.user_id,
          PASSWORD: existuser.password,
          EMAIL: existuser.email,
        },
        ENV,
        { expiresIn: "24h" }
      );

      return res.status(200).json({
        msg: "login Successfully",
        token,
        username: existuser.username,
        userId: existuser._id,
      });
    } else {
      return res.status(400).json({ msg: "Password incorrect" });
    }
  } catch (error) {
    console.error("Error in registration:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// get routes handler

async function handleuserName(req, res) {
  try {
    const { username } = req.params;
    const result = await user.findOne({ username });
    if (!result) {
      return res.status(400).json({ msg: "User not found" });
    } else {
      const responseData = {
        username: result.username,
        userId: result._id,
        email: result.email,
        profile: result.profile,
      };

      return res.status(200).json(responseData);
    }
  } catch (error) {
    console.error("Error in registration:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  handleregister,
  handlelogin,
  handleuserName,
};
