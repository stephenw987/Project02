// Requires App-specific Modules
const sequelize = require("../config/connection.js");
const seedCategories = require("./category-seeds.js");
const seedNotes = require("./note-seeds.js");
const seedNoteUsers = require("./noteuser-seeds.js");

// Defines Function to Execute seeding of Note Taker with initial Categories and Notes
const exeSeeds = async function () {
  await sequelize.sync({ force: true });
  console.log("exe-seeds Line 8: Database synchronized through Sequelize");

  await seedCategories();
  console.log("exe-seeds Line 11: Categories seeded to Database");

  await seedNotes();
  console.log("exe-seeds Line 14: Notes seeded to Database");

  await seedNoteUsers();
  console.log("exe-seeds Line 19: Note Users seeded to Database");

  process.exit(0);
};

// Invokes Seeding Function
exeSeeds();
