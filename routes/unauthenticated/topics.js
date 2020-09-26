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

    res.render("unauthenticated/topics.html", { category, topics });
});

// GET search topics handle
router.get("/search", async (req, res, next) => {
    const { query } = req.query;

    const topics = await Topic.find({
        name: { $regex: ".*" + query + ".*", $options: "i" },
    }).sort({ name: "asc" });

    res.render("unauthenticated/search.html", { topics });
});

module.exports = router;
