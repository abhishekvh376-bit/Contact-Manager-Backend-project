const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
exports.postRegister = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  //hash password
  const hashedPassword = await bcrypt.hash(password, 12); //bcrypt gives us promise so we use await
  console.log("hashed password = ",hashedPassword);
  const user =  await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log(`user created = ${user}`);
  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    login a new user
// @route   POST /api/users/login
// @access  Public
exports.postLogin = asyncHandler (async(req, res) => {
  const { email, password } = req.body;
  if(!email || !password) {
    res.status(400);
    throw new Error("Please add email and password");
  }
  // Check for user email
  const user = await User.findOne({ email});
  if (user && ( await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign({
      user: {
        username: user.username,
        email: user.email,
        id: user.id,
      },
    }, process.env.ACCESS_TOKEN_SECRET,
    {expiresIn: "15m"}
    );
    console.log("access token = ", accessToken);
    res.status(200).json( { accessToken } );
  }
});

// @desc    Get current user
// @route   GET /api/users/current
// @access  Private
exports.getCurrentUser = asyncHandler((req, res) => {
  res.send(req.user);
});