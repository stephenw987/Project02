// Requires Node Modules
const router = require("express").Router();

// Defines App Directory location of Routes
const homeRoutes = require("./pageRoutes");
// const noteRoutes = require("./api/noteRoute");
const noteRoutes = require("./noteRoute");
const apiRoutes = require("./api");

// Defines Routes for HTML Paths (e.g., /, /note)
router.use("/", homeRoutes);
router.use("/note", noteRoutes);
router.use("/api", apiRoutes);

// Exports Routes for use in App
module.exports = router;
