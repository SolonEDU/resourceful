const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../../config/auth");

router.use(ensureAuthenticated);

router.use("/comments", require("./comments"));
router.use("/dashboard", require("./dashboard"));
router.use("/resources", require("./resources"));
router.use("/topics", require("./topics"));
router.use("/savedresources", require("./savedResources"));
router.use("/votes", require("./votes"));

module.exports = router;
