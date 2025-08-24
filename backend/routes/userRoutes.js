const express = require("express");
const userController = require("../controllers/userController");
const validateToken = require("../middleware/validateToken");

const userRouter = express.Router();

userRouter.post("/register", userController.postRegister);
userRouter.post("/login", userController.postLogin);
userRouter.get("/current", validateToken, userController.getCurrentUser);

module.exports = userRouter;