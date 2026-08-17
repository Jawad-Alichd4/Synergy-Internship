const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const verifyToken = crypto.randomBytes(32).toString("hex");

    const user = await User.create({
      name, email, password: hashedPassword,
      verifyToken,
      verifyTokenExpires: Date.now() + 24 * 60 * 60 * 1000,
    });

    const verifyUrl = `${process.env.CLIENT_URL}/verify-email/${verifyToken}`;
    await sendEmail({
      to: email,
      subject: "Verify your email",
      html: `<p>Click to verify: <a href="${verifyUrl}">${verifyUrl}</a></p>`,
    });

    res.status(201).json({ message: "Registered. Check your email to verify." });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { register };