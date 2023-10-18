const express = require("express");
router = express.Router();
router.get("/", (req, res) => {
    res.render("pages/index")
});

router.get("/register", (req, res) => {
    res.render("common/register")
})
router.get("/login", (req, res) => {
    res.render("common/login")
})
router.get("/dashboard", (req, res) => {
    res.render("common/dashboard", {user: "Conor"})
});
module.exports = router;