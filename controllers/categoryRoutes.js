// Requires Node Modules
const router = require("express").Router();

// GET Category (Entry Form) Page Router
// Note: Route is Prefixed with '/category' through Express
// Note: Only Renders Page, Category Entry managed through /api/categoryRoute.js
router.get("/", async function (req, res) {
  try {
    res.render("category");
  } catch (err) {
    res.json(err);
  }
});

// Exports Routes for use in App
module.exports = router;
