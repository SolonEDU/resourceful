const express = require("express");
const router = express.Router();

const Comment = require("../../models/Comment");
const Resource = require("../../models/Resource");

// GET resources for a topic page
router.get("/topic/:topicId", async (req, res, next) => {
    // const { id } = req.session.passport.user;
    // TODO get user vote data for each resource

    const { topicId } = req.params;

    const resources = await Resource.find({ topic: topicId });

    res.render("authenticated/resources.html", { resources });
});

// GET resource with comments page
router.get("/:resourceId", async (req, res) => {
    const { resourceId } = req.params;

    const resource = await Resource.findById(resourceId);

    const comments = await Comment.find({ resource: resource._id });

    res.render("authenticated/resource.html", {resource, comments})
});

// POST create resource handle
router.post("/", async (req, res) => {
    const newResource = new Resource(req.body);

    await newResource.save();
});

module.exports = router;
