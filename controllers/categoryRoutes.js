// Requires Node Modules
const router = require("express").Router();

// Requires App-specific Model
const Category = require("../models/Category.js");

// GET Category (Entry Form) Page Router
// Note: Route is Prefixed with '/category' through Express
// Note: Only Renders Page, Category Entry managed through /api/categoryRoute.js
router.get("/", async function (req, res) {
  try {
    const categoryData = await Category.findAll();

    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );
    // console.log("categoryRoutes.js Line 14: Data: ", categories);

    res.render("category", { categories });
  } catch (err) {
    res.json(err);
  }
});

// GET Category Page Router for Identified Category
// Note: Route is Prefixed with '/category' through Express
// Note: Only Renders Page, Category Edit / Delete managed through /api/categoryRoute.js
router.get("/:id", async function (req, res) {
  try {
    const categoryData = await Category.findByPk(req.params.id);

    const category = categoryData.get({ plain: true });
    // console.log("categoryRoutes.js Line 32: Data: ", category);

    // Renders Page, category-edit.handlebars
    res.render("category-edit", { category });
  } catch (err) {
    res.json(err);
  }
});

// Exports Routes for use in App
module.exports = router;
