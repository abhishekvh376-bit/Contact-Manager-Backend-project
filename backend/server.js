const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const errorhandler = (require("./middleware/errorHandler"));
const connectDB = require("./config/dbConnection");
connectDB();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(errorhandler);


app.use("/api/contacts", require("./routes/contactRouter"));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});