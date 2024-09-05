// Requires Node Modules
const { Model, DataTypes } = require("sequelize");

// Requires App-specific Connection File
const sequelize = require("../config/connection.js");

class Note extends Model {}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    note_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note_body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: "note",
  }
);

module.exports = Note;
