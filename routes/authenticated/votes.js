const express = require("express");
const router = express.Router();

const Vote = require("../../models/Vote");
const Resource = require("../../models/Resource");

// POST create vote handle
router.post("/", async (req, res, next) => {
    const userId = req.session.passport.user;
    let { resourceId, value } = req.body;

    value = Number(value);

    const newVote = new Vote({
        value,
        resource: resourceId,
        user: userId,
    });

    await newVote.save();

    const resource = await Resource.findById(resourceId);
    const newVotes = resource.votes + value;
    resource.votes = newVotes;
    await resource.save();

    res.status(200).send("Created vote");
});

// DELETE delete vote handle
router.delete("/:voteId", async (req, res, next) => {
    const { voteId } = req.params;

    await Vote.findById(voteId).remove();
});

module.exports = router;
