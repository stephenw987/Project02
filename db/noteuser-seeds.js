// Requires App-specific Modules
const NoteUser = require("../models/NoteUser");

// Defines Seed Data for Note Taker for Development
const noteuserData = [
  {
    user_name: "user001",
    user_password: "password001",
  },
  {
    user_name: "user002",
    user_password: "password002",
  },
  {
    user_name: "user003",
    user_password: "password004",
  },
  {
    user_name: "user004",
    user_password: "password004",
  },
];

// Defines Function to seed Note Taker with initial Notes using Note Model
const seedNoteUsers = () => NoteUser.bulkCreate(noteuserData);

// Exports Seed Function for use outside of App through Dev Initialization
module.exports = seedNoteUsers;
