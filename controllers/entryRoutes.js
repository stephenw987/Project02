// Requires Node Modules
const router = require("express").Router();

// Requires App-specific Model
const Category = require("../models/Category.js");

// GET Note (Entry Form) Page Router
// Note: Route is Prefixed with '/entry' through Express
router.get("/", async function (req, res) {
  try {
    // Returns list of available Categories for Entry drop-down menu
    const categoryData = await Category.findAll();

    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );
    // console.log("entryRoute.js Line 17, Current Categories", categories);

    // Renders Page, entry.handlebars
    res.render("entry", { categories });
  } catch (err) {
    console.log("entryRoute.js Line 12: Error: ", err);
    res.json(err);
  }
});

// Exports Routes for use in App
module.exports = router;
