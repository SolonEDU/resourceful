const express = require("express");
const router = express.Router();

const SavedResource = require("../../models/SavedResource");
const User = require("../../models/User");

router.get("/savedresources", async (res, req, next) => {
    const { id } = req.session.passport.user;

    const { _id } = await User.findById(id);
    const savedResources = await SavedResource.find({ user });
    res.render("savedresources.html", { savedResources });
});

modules.export(router);
