// Requires Node Modules
const router = require("express").Router();

// Requires App-specific Model
const Note = require("../models/Note.js");
const Category = require("../models/Category.js");

// GET Home (Index) Page Router
// Note: Route is NOT Prefixed
router.get("/", async function (req, res) {
  try {
    const noteData = await Note.findAll();
    const categoryData = await Category.findAll();

    const rawNotes = await noteData.map( (note) => note.get({ plain: true }));
    // console.log("pageRoutes.js Line 16: Data: ", notes);

    // create a map of all the category name with the id as a a key
    const categoryNames = {}
    categoryData.forEach(c => {
      // get the category as a plain object
      const cat = c.get({ plain: true });
      // add the category name to our category name map, using the id as the key
      categoryNames[cat.id] = cat.category_name;
    });

    // add a category name to each note item, using the category name map
    const notes = rawNotes.map(n => ({
      ...n, 
      category_name: categoryNames[n.category_id]
    }));

    // Renders Page, index.handlebars
    res.render("index", { notes, signedin: req.session.signed_in });
  } catch (err) {
    console.log("pageRoutes.js Line 20: Error: ", err);
    res.json(err);
  }
});
// router.get("/", async function (req, res) {
//   try {
//     const noteData = await Note.findAll();
//     const categoryData = await Category.findAll();

//     const notes = noteData.map((note) => note.get({ plain: true }));
//     // console.log("pageRoutes.js Line 16: Data: ", notes);

//     const categories = categoryData.map((category) =>
//       category.get({ plain: true })
//     );
//     console.log(categories);

//     // Renders Page, index.handlebars
//     res.render("index", { notes, signedin: req.session.signed_in });
//   } catch (err) {
//     console.log("pageRoutes.js Line 20: Error: ", err);
//     res.json(err);
//   }
// });

// GET Note Page Router for Identified Note
// Note: Route is NOT Prefixed
router.get("/note/:id", async function (req, res) {
  try {
    const noteData = await Note.findByPk(req.params.id);

    const note = noteData.get({ plain: true });
    // console.log("pageRoutes.js Line 32: Data: ", note);

    // Renders Page, note.handlebars
    res.render("note", { note, signedin: req.session.signed_in });
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
