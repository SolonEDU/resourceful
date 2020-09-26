const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../../config/auth");

router.use(ensureAuthenticated);

router.use("/dashboard", require("./dashboard"));
router.use("/resources", require("./resources"));
router.use("/topics", require("./topics"));
router.use("/savedresources", require("./savedResources"));

module.exports = router;
