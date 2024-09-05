// Requires Node Modules
const router = require("express").Router();

// Defines App Directory location of Routes
const pageRoutes = require("./pageRoutes");
const entryRoutes = require("./entryRoutes");
// const noteRoutes = require("./noteRoute");
const categoryRoutes = require("./categoryRoutes");
const apiRoutes = require("./api");
// const noteRoutes = require("./api/noteRoute");

// Defines Routes for HTML Paths (e.g., /, /note)
router.use("/", pageRoutes);
router.use("/entry", entryRoutes);
// router.use("/note", noteRoutes);
router.use("/category", categoryRoutes);
router.use("/api", apiRoutes);

// Exports Routes for use in App
module.exports = router;
