const register = require("../controller/Register");
const router = require("express").Router();
router.post("/", register.register);
router.get("/verify-email/:token", register.verifyEmail);

module.exports = router;