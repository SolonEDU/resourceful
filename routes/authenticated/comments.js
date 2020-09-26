const express = require("express");
const router = express.Router();

const Comment = require("../../models/Comment");

// POST create comment handle
router.post("/:resourceId/:userId", async (req, res, next) => {
    const { resourceId, userId } = req.params;
    const { content } = req.body;

    const newComment = new Comment({
        content,
        resource: resourceId,
        user: userId,
    });

    res.json(await newComment.save());
});

module.exports = router;
