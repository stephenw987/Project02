// Requires Node Modules
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

// Requires App-specific Connection File
const sequelize = require("../config/connection.js");

class NoteUser extends Model {
  validatePassword(signinPassword) {
    return bcrypt.compareSync(signinPassword, this.user_password);
  }
}

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
    hooks: {
      beforeCreate: async (noteuser) => {
        if(noteuser.user_password) {
          noteuser.user_password = await bcrypt.hash(noteuser.user_password, 10);
        }
      }
    }
  }
);

module.exports = NoteUser;
