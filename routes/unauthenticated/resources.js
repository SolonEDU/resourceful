const express = require("express");
const router = express.Router();

const Comment = require("../../models/Comment");
const Resource = require("../../models/Resource");
const Topic = require("../../models/Topic");

// GET resources for a topic page
router.get("/topic/:topicId", async (req, res, next) => {
    const { topicId } = req.params;

    const topic = await Topic.findById(topicId);

    const resources = await Resource.find({ topic: topicId }).sort({ votes: "desc" });

    res.render("unauthenticated/resources.html", { topic, resources });
});

// GET filtered resources
router.get("/topic/:topicId", async (req, res, next) => {
    const { topicId } = req.params;
    const { typeFilter } = req.params;

    const topic = await Topic.findById(topicId);

    const resources = await Resource.find({
        topic: topicId,
        type: typeFilter,
    }).sort({ votes: "desc" });

    res.render("authenticated/resources.html", { topic, resources, typeFilter });
});

// GET resource with comments page
router.get("/:resourceId", async (req, res) => {
    const { resourceId } = req.params;

    const resource = await Resource.findById(resourceId);

    const comments = await Comment.find({ resource: resource._id });

    res.render("unauthenticated/resource.html", { resource, comments });
});

module.exports = router;
