const SQLZConfig = require("../../../config/sequelize.config");
const { DataTypes, Model } = require("sequelize");
const AccEtt = require("./account.ett");

class UserEtt extends Model {}

UserEtt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idAccount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idRole: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize: SQLZConfig.SQLZInstance,
    freezeTableName: true,
    tableName: "user",
    indexes: [
      {
        unique: true,
        fields: ["username"],
      },
    ],
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = UserEtt;
