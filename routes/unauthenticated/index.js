const express = require("express");
const router = express.Router();
const { alreadyAuthenticated } = require("../../config/auth");

router.use(alreadyAuthenticated);

router.use("/dashboard", require("./dashboard"));
router.use("/resources", require("./resources"));
router.use("/topics", require("./topics"));

module.exports = router;
