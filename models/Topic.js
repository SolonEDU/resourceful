const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const TopicSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    numResources: {
        type: Number,
        required: true,
        default: 0,
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true,
    },
});

const Topic = mongoose.model("Topic", TopicSchema);

module.exports = Topic;
