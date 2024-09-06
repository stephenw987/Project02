const Category = require("./Category");
const Note = require("./Note");

// Creates a relationship between User and Project model, with the User having a "has many" relationship with Project model.
Note.hasOne(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Creates a relationship between User and Project model, with a "belongs to" relationship of the Project to the User.
Category.belongsTo(Note, {
  foreignKey: "note_id",
});

module.exports = { User, Project };
