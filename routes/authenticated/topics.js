const express = require("express");
const router = express.Router();

const Topic = require("../../models/Topic");

// GET topics for a category page
router.get("/category/:categoryId", async (req, res, next) => {
    const { categoryId } = req.params;

    const topics = await Topic.find({
        category: categoryId,
    });

    res.render("authenticated/topics.html", { topics });
});

// POST create topic handle
router.post("/", async (req, res, next) => {
    const { name, categoryId } = req.body;

    const newTopic = new Topic({
        name,
        category: categoryId,
    });

    await newTopic.save();
});

// GET search topics handle
router.get("/search", async (req, res, next) => {
    const { query } = req.query;

    const topics = await Topic.find({
        name: { $regex: ".*" + query + ".*", $options: "i" },
    }).sort({ name: "asc" });

    res.render("authenticated/search.html", { topics });
});

module.exports = router;