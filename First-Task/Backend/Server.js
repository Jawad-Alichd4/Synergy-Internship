const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: ".gitignored/.env" });
const router = express.Router();
const app = express();
const port = 5000;
const Login = require("./routes/Login");
const forgotPassword = require("./routes/forgotPassword");
const register = require("./routes/RegisterRoute");
const authRoutes = require("./routes/auth");
const forgotPasswordController = require("./controller/forgotpassword");
const connectDB = require("./config/dbConnection");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors({
  origin: "http://localhost:5173", // your Vite frontend URL
  credentials: true,
}));
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use("/api/login", Login);
app.use("/api/forgot-password", forgotPassword);
app.use("/api/register", register);
app.use("/api/auth", authRoutes);
app.use("/api/reset-password/:token", forgotPasswordController.resetPassword);



app.listen(port, () => {
    console.log("server is running on port " + port);
})