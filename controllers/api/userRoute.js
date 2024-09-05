// Requires Node Modules
const router = require("express").Router();

// Exports Routes for use in App
const NoteUser = require("../../models/NoteUser");

// Defines POST Route to create new Member (User)
router.post("/", async function (req, res) {
  try {
    console.log("userRoute.js Line 10: ", req.body);

    const noteuserData = await NoteUser.create({
      user_name: req.body.user_name,
      user_password: req.body.user_password,
    });
    console.log("userRoute.js Line 16: User Route is active.");

    res.json(noteuserData);
  } catch (err) {
    res.json(err);
  }
});

// Exports Routes for use in App
module.exports = router;
