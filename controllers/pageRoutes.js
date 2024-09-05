// Requires Node Modules
const router = require("express").Router();

// Requires App-specific Model
const Note = require("../models/Note.js");

// GET Home (Index) Page Router
// Note: Route is NOT Prefixed
router.get("/", async function (req, res) {
  try {
    const noteData = await Note.findAll();

    const notes = noteData.map((note) => note.get({ plain: true }));
    // console.log("homeRoute.js Line 11: Data: ", notes);

    // Renders Page, index.handlebars
    res.render("index", { notes });
  } catch (err) {
    console.log("homeRoute.js Line 15: Error: ", err);
    res.json(err);
  }
});

// GET Note Page Router for Identified Note
// Note: Route is NOT Prefixed
router.get("/note/:id", async function (req, res) {
  try {
    const noteData = await Note.findByPk(req.params.id);

    const note = noteData.get({ plain: true });
    // console.log("homeRoute.js Line 28: Data: ", note);

    // Renders Page, note.handlebars
    res.render("note", { note });
  } catch (err) {
    res.json(err);
  }
});

// GET Sign-In Page Router for Existing Members
router.get("/signin", async function (req, res) {
  try {
    // Renders Page, signin.handlebars
    res.render("signin");
  } catch (err) {
    res.json(err);
  }
});

// GET Join Page Router for New Members
router.get("/join", async function (req, res) {
  try {
    // Renders Page, join.handlebars
    res.render("join");
  } catch (err) {
    res.json(err);
  }
});

// Exports Routes for use in App
module.exports = router;
