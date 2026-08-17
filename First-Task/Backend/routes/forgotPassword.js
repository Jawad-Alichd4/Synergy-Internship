const forgotPassword = require("../controller/forgotpassword");
router.post("/forgot-password", forgotPassword.forgotPassword);
router.post("/reset-password/:token", forgotPassword.resetPassword);