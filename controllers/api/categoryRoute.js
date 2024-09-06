// Requires Node Modules
const router = require("express").Router();

const Category = require("../../models/Category");
// Requires App-specific Model
const Note = require("../../models/Category");

// Defines POST Route to create new Category
router.post("/", async function (req, res) {
  try {
    console.log("categoryRoute.js Line 10: ", req.body);

    const categoryData = await Note.create({
      category_name: req.body.category_name,
    });

    res.json(categoryData);
  } catch (err) {
    res.json(err);
  }
});

// Defines PUT Route to update existing Category
router.put("/:id", async function (req, res) {
  try {
    console.log("categoryRoute.js Line 25: ", req.body);

    const category = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.json(category);
  } catch (err) {
    res.json(err);
  }
});

// Defines DELETE Route to destroy existing Category
router.delete("/:id", async function (req, res) {
  try {
    console.log("categoryRoute.js Line 48: ", req.body);

    const category = Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(200);

    console.log("categoryRoute.js Line 56: Delete Route is active.");
  } catch (err) {
    res.json(err);
  }
});

// Exports Routes for use in App
module.exports = router;
