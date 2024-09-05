// Requires Node Modules
const router = require("express").Router();

// Requires App-specific Routes
const noteRoute = require("./noteRoute");
const categoryRoute = require("./categoryRoute");
const userRoute = require("./userRoute");

// Defines POST Route to add new Notes (http://localhost:3000/api/notes)
// Note: Routes are Prefixed with '/api' through Express
router.use("/notes", noteRoute);
router.use("/categories", categoryRoute);
router.use("/users", userRoute);

// Exports Routes for use in App
module.exports = router;
