const router = require("express").Router();
const forgotPassword = require("../controller/forgotpassword");
router.post("/", forgotPassword.forgotPassword);
router.post("/:token", forgotPassword.resetPassword);

module.exports = router;