const express = require("express");
const router = express.Router();
const app = express();
const port = 3000;
const Login = require("./routes/Login");
const forgotPassword = require("./routes/forgotPassword");
const register = require("./routes/RegisterRoute");
const authRoutes = require("./routes/auth");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use("/login", Login);
app.use("/forgot-password", forgotPassword);
app.use("/register", register);
app.use("/auth", authRoutes);
app.use("/reset-password/:token", forgotPassword.resetPassword);



app.listen(port, () => {
    console.log("server is running on port " + port);
})