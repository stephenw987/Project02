// Requires App Models
const Category = require("./Category");
const Note = require("./Note");
const NoteUser = require("./NoteUser");

// Defines relationship between Category and Note Models, Note "has one" relationship with Category
Note.hasOne(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Defines relationship between Category and Note Models, Category "belongs to" Note
Category.belongsTo(Note, {
  foreignKey: "note_id",
});

// Defines relationship between Note and Note User Models, Note "belongs to" Note User
Note.belongsTo(NoteUser, {
  foreignKey: "noteuser_id",
  onDelete: "CASCADE",
});

module.exports = { User, Project };
