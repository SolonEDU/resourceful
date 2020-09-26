const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../../config/auth");

router.use(ensureAuthenticated);

router.use("/dashboard", require("./dashboard"));

module.exports = router;
