const express = require("express");
const router = express.Router();

const Vote = require("../../models/Vote");
const Resource = require("../../models/Resource");

// POST create vote handle
router.post("/", async (req, res, next) => {
    const { id } = req.session.passport.user;
    const { resourceId, value } = req.body;

    const newVote = new Vote({
        value,
        resource: resourceId,
        user: id,
    });

    await newVote.save();

    const resource = await Resource.findById(resourceId);
    const newVotes = resource.votes + value;
    resource.votes = newVotes;
    await resource.save();
});

// DELETE delete vote handle
router.delete("/:voteId", async (req, res, next) => {
    const { voteId } = req.params;

    await Vote.findById(voteId).remove();
});

module.exports = router;
