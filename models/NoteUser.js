// Requires Node Modules
const { Model, DataTypes } = require("sequelize");

// Requires App-specific Connection File
const sequelize = require("../config/connection.js");

class NoteUser extends Model {}

NoteUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: "noteuser",
  }
);

module.exports = NoteUser;
