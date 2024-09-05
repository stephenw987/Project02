// Requires Node Modules
const router = require("express").Router();

// Requires App-specific Model
const Note = require("../../models/Note");

// Defines POST Route to create new Note
router.post("/", async function (req, res) {
  try {
    const noteData = await Note.create({
      note_title: req.body.note_title,
      note_body: req.body.note_body,
    });

    res.json(noteData);
  } catch (err) {
    res.json(err);
  }
});

router.put("/:id", async function (req, res) {
  try {
    const note = await Note.update(
      {
        note_title: req.body.note_title,
        note_body: req.body.note_body,
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

// Exports Routes for use in App
module.exports = router;
