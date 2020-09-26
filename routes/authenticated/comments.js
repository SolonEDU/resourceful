const express = require("express");
const router = express.Router();

const Comment = require("../../models/Comment");

// POST create comment handle
router.post("/", async (req, res, next) => {
    const { resourceId, userId, content } = req.body;

    const newComment = new Comment({
        content,
        resource: resourceId,
        user: userId,
    });

    await newComment.save();
});

module.exports = router;
