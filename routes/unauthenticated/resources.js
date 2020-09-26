const express = require("express");
const router = express.Router();

const Comment = require("../../models/Comment");
const Resource = require("../../models/Resource");

// GET resources for a topic page
router.get("/topic/:topicId", async (req, res, next) => {
    const { topicId } = req.params;

    const resources = await Resource.find({ topic: topicId });

    res.render("unauthenticated/resources.html", { resources });
});

// GET resource with comments page
router.get("/:resourceId", async (req, res) => {
    const { resourceId } = req.params;

    const resource = await Resource.findById(resourceId);

    const comments = await Comment.find({ resource: resource._id });

    res.render("unauthenticated/resource.html", { resource, comments });
});

module.exports = router;
