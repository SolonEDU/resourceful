const express = require("express");
const router = express.Router();

const Category = require("../../models/Category");

// GET categories on dashboard page
router.get("/", async (req, res, next) => {
    const categories = await Category.find().sort({ name: "asc" });

    res.render("authenticated/dashboard.html", { categories });
});

// POST create category handle
router.post("/", async (req, res, next) => {
    const { name } = req.body;

    const newCategory = new Category({
        name,
    });

    await newCategory.save();
});

module.exports = router;
