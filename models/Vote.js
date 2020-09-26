const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const VoteSchema = new Schema({
    value: {
        type: Number,
        required: true,
    },
    resource: {
        type: ObjectId,
        ref: "Resource",
        required: true,
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true,
    },
});

const Vote = mongoose.model("Vote", VoteSchema);

module.exports = Vote;
