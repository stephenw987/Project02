// Requires Node Modules
const { Model, DataTypes } = require("sequelize");

// Requires App-specific Connection File
const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "note",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: "category",
  }
);

module.exports = Category;
