const express = require("express");
const router = express.Router();

const SavedResource = require("../../models/SavedResource");

// GET saved resources page
router.get("/", async (res, req, next) => {
    const { id } = req.session.passport.user;

    const savedResources = await SavedResource.find({ user: id }).populate(
        "resource"
    );

    const resources = [];
    savedResources.forEach((savedResource) => {
        resources.push(savedResource.resource);
    });

    res.render("authenticated/savedResources.html", { resources });
});

// POST save resource handle

module.exports = router;
