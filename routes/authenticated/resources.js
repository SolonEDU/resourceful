const express = require("express");
const router = express.Router();

const Comment = require("../../models/Comment");
const Resource = require("../../models/Resource");
const Vote = require("../../models/Vote");
const Topic = require("../../models/Topic");

// GET resources for a topic page
router.get("/topic/:topicId", async (req, res, next) => {
    const userId = req.session.passport.user;

    const { topicId } = req.params;

    const topic = await Topic.findById(topicId);

    const resources = await Resource.find({ topic: topicId }).sort({
        votes: "desc",
    });

    resources.forEach((resource) => {
        Vote.findOne({ resource: resource._id, user: userId }).then((vote) => {
            if (vote) {
                resource.userVote = vote.value;
            } else {
                resource.userVote = null;
            }
        });
    });

    res.render("authenticated/resources.html", { topic, resources });
});

// GET filtered resources
router.get("/topic/:topicId", async (req, res, next) => {
    const { id } = req.session.passport.user;

    const { topicId } = req.params;
    const { typeFilter } = req.params;

    const topic = await Topic.findById(topicId);

    const resources = await Resource.find({
        topic: topicId,
        type: typeFilter,
    }).sort({ votes: "desc" });

    resources.forEach((resource) => {
        Vote.findOne({ resource: resource._id, user: id }).then((vote) => {
            if (vote) {
                resource.userVote = vote.value;
            } else {
                resource.userVote = null;
            }
        });
    });

    res.render("authenticated/resources.html", {
        topic,
        resources,
        typeFilter,
    });
});

// GET resource with comments page
router.get("/:resourceId", async (req, res) => {
    const { resourceId } = req.params;

    const resource = await Resource.findById(resourceId);

    const comments = await Comment.find({ resource: resource._id });

    res.render("authenticated/resource.html", { resource, comments });
});

// POST create resource handle
router.post("/", async (req, res) => {
    const newResource = new Resource(req.body);

    await newResource.save();

    res.redirect(`/authenticated/resources/${req.body.topic}`)
});

module.exports = router;
