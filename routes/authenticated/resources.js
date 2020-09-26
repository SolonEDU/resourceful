const express = require("express");
const router = express.Router();

const Resource = require("../../models/Resource");

// GET resources for a topic page
router.get("/category/:categoryId/topic/:topicId", async (req, res, next) => {
    // const { id } = req.session.passport.user;
    // TODO get user vote data for each resource

    const { topicId } = req.params;

    const resources = await Resource.find({ topic: topicId });

    res.render("authenticated/resources.html", { resources });
});

// GET resource with comments page

// POST create resource handle

module.exports = router;
