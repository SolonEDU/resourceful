const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const ResourceSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    experienceLevel: {
        type: String,
    },
    type: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
        required: true,
        default: 0,
    },
    topic: {
        type: ObjectId,
        ref: "Topic",
        required: true,
    },
});

const Resource = mongoose.model("Resource", ResourceSchema);

module.exports = Resource;
