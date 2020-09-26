const express = require("express");
const router = express.Router();

const Category = require("../../models/Category");
const Topic = require("../../models/Topic");
const Resource = require("../../models/Resource");

router.get("/", async (req, res, next) => {
    const categories = await Category.find();

    res.render("authenticated/dashboard.html", { categories });
});

router.get("/category/:categoryId", async (req, res, next) => {
    const { categoryId } = req.params;

    const { _id } = await Category.findById(categoryId);

    const topics = await Topic.find({
        category: _id,
    });

    res.render("authenticated/topics.html", { topics });
});

router.get("/category/:categoryId/topic/:topicId", async (req, res, next) => {
    const { topicId } = req.params;

    const { _id } = await Topic.findById(topicId);

    const resources = await Resource.find({ topic: _id });

    res.render("authenticated/resources.html", { resources });
});

module.exports = router;
