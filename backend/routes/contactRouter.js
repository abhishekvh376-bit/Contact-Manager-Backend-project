const express = require("express");
const contactRouter = express.Router();
const contactController = require("../controllers/contactController");
const validateToken = require("../middleware/validateToken");

// Define the route for getting contacts
// This will respond to GET requests at /api/contacts
contactRouter.use(validateToken);
contactRouter.get("/", contactController.getContact);
contactRouter.post("/", contactController.postContact);
contactRouter.get("/:id", contactController.getiContact);
contactRouter.put("/:id", contactController.putContact);
contactRouter.delete("/:id", contactController.deleteContact);

module.exports = contactRouter;