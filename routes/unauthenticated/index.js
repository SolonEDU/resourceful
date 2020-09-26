const express = require("express");
const router = express.Router();

router.use("/dashboard", require("./dashboard"));
router.use("/resources", require("./resources"));
router.use("/topics", require("./topics"));

module.exports = router;
