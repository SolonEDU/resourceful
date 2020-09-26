const express = require("express");
const router = express.Router();

const SavedResource = require("../../models/SavedResource");

// GET saved resources page
router.get("/", async (res, req, next) => {
    console.log(req.session);
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
router.post("/", async (req, res, next) => {
    const { id } = req.session.passport.user;
    const { resourceId } = req.body;

    const newSavedResource = new savedResource({
        resource: resourceId,
        user: id,
    });

    await newSavedResource.save();
});


module.exports = router;
