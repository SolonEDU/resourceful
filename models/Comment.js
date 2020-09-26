const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const CommentSchema = new Schema({
    content: {
        type: String,
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

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
