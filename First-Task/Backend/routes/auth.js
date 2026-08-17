router.get("/me", protect, (req, res) => {
    res.json(req.user)
})

router.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({message: "Logged out successfully"});
});

module.exports = router;