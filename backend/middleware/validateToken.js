const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
      // Get token from header
      token = authHeader.split(" ")[1];
      // Verify token
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) {
          res.status(401);
          throw new Error("User is not authorized");
        }
        req.user = decoded.user;
        next();
      });
  }
  if (!token) {
    res.status(401);
    throw new Error("User is not authorized, no token");
  }
});

module.exports = validateToken;