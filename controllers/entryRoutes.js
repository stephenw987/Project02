// Requires Node Modules
const router = require("express").Router();

// GET Note (Entry Form) Page Router
// Note: Route is Prefixed with '/entry' through Express
router.get("/", async function (req, res) {
  try {
    // Renders Page, entry.handlebars
    res.render("entry");
  } catch (err) {
    console.log("entryRoute.js Line 12: Error: ", err);
    res.json(err);
  }
});

// Exports Routes for use in App
module.exports = router;
