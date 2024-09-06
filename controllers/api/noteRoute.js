// Requires Node Modules
const router = require("express").Router();

// Requires App-specific Model
const Note = require("../../models/Note");

// THINK THIS POST ROUTE IS NOT SUPERFLUOUS TO entryRoute.js
// Defines POST Route to create new Note
router.post("/", async function (req, res) {
  try {
    console.log("noteRoute.js Line 10: ", req.body);

    const noteData = await Note.create({
      note_title: req.body.note_title,
      note_body: req.body.note_body,
      category_id: req.body.category_id,
    });

    res.json(noteData);
  } catch (err) {
    res.json(err);
  }
});

// Defines PUT Route to update existing Note
router.put("/:id", async function (req, res) {
  try {
    console.log("noteRoute.js Line 26: ", req.body);

    const note = await Note.update(
      {
        note_title: req.body.note_title,
        note_body: req.body.note_body,
        category_id: req.body.category_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.json(note);
  } catch (err) {
    res.json(err);
  }
});

// Defines DELETE Route to destroy existing Note
router.delete("/:id", async function (req, res) {
  try {
    console.log("noteRoute.js Line 49: ", req.body);

    const note = Note.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(200);

    console.log("noteRoute.js Line 57: Delete Route is active.");
  } catch (err) {
    res.json(err);
  }
});

// Exports Routes for use in App
module.exports = router;
