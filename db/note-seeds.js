// Requires App-specific Modules
const Note = require("../models/Note");

// Defines Seed Data for Note Taker for Development
const noteData = [
  {
    note_title: "Note Title 001",
    note_body: "Note Text 001",
    category_id: 1,
  },
  {
    note_title: "Note Title 002",
    note_body: "Note Text 002",
    category_id: 2,
  },
  {
    note_title: "Note Title 003",
    note_body: "Note Text 003",
    category_id: 3,
  },
];

// Defines Function to seed Note Taker with initial Notes using Note Model
const seedNotes = () => Note.bulkCreate(noteData);

// Exports Seed Function for use outside of App through Dev Initialization
module.exports = seedNotes;
