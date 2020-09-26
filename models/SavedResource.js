const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const SavedResourceSchema = new Schema({
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

const SavedResource = mongoose.model("SavedResource", SavedResourceSchema);

module.exports = SavedResource;
