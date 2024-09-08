// Requires Node Modules
const router = require("express").Router();

// Exports Routes for use in App
const NoteUser = require("../../models/NoteUser");

// Defines POST Route to create new Note User
// Note: Route is Prefixed with '/users' through Express
router.post("/", async function (req, res) {
  try {
    console.log("userRoute.js Line 10: ", req.body);

    const noteuserData = await NoteUser.create({
      user_name: req.body.user_name,
      user_password: req.body.user_password,
    });
    console.log("userRoute.js Line 16: User Route is active.");

    req.session.save(() => {
      req.session.user_id = noteuserData.id;
      req.session.user_name = noteuserData.user_name;
      req.session.signed_in = true;
    });

    res.json(noteuserData);
  } catch (err) {
    res.json(err);
  }
});

// Defines POST Route to Sign In existing Member (Note User)
// Note: Route is Prefixed with '/users' through Express
router.post("/signin", async function (req, res) {
  try {
    const noteuserData = await NoteUser.findOne({
      where: { user_name: req.body.user_name },
    });

    if (!noteuserData) {
      res.json(err);
      return;
    }

    const userPassword = await noteuserData.validatePassword(
      req.body.user_password
    );

    if (!userPassword) {
      res.json(err);
      return;
    }

    req.session.save(() => {
      req.session.user_id = noteuserData.id;
      req.session.user_name = noteuserData.user_name;
      req.session.signed_in = true;

      res.json({ message: "You successfully signed in." });
    });
  } catch (err) {
    res.json(err);
  }
});

// Exports Routes for use in App
module.exports = router;
