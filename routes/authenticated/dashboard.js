const express = require("express");
const router = express.Router();

const Category = require("../../models/Category");

// GET categories on dashboard page
router.get("/", async (req, res, next) => {
    const categories = await Category.find().sort({ name: "asc" });

    res.render("authenticated/dashboard.html", { categories });
});

// POST create category handle

module.exports = router;
