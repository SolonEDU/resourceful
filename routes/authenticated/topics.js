const express = require("express");
const router = express.Router();

const Category = require("../../models/Category");
const Topic = require("../../models/Topic");

// GET topics for a category page
router.get("/category/:categoryId", async (req, res, next) => {
    const { categoryId } = req.params;

    const category = await Category.findById(categoryId);

    const topics = await Topic.find({
        category: categoryId,
    });

    res.render("authenticated/topics.html", { category, topics });
});

// POST create topic handle
router.post("/", async (req, res, next) => {
    const { name, categoryId } = req.body;

    const newTopic = new Topic({
        name,
        category: categoryId,
    });

    await newTopic.save();

    res.redirect(`/authenticated/topics/category/${categoryId}`);
});

// GET search topics handle
router.get("/search", async (req, res, next) => {
    const { query } = req.query;

    const topics = await Topic.find({
        name: { $regex: ".*" + query + ".*", $options: "i" },
    }).sort({ name: "asc" });

    console.log(topics);

    res.render("authenticated/search.html", { topics });
});

module.exports = router;
