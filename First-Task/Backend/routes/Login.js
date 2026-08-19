const router = require("express").Router();
const Login = require("../controller/Login");
router.post("/", Login.login);

module.exports = router;