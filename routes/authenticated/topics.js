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

// GET search topics handle

module.exports = router;
