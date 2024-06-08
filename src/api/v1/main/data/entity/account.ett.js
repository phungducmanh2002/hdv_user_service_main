const SQLZConfig = require("../../../config/sequelize.config");
const { DataTypes, Model } = require("sequelize");
const DataHelper = require("../../../helper/data.helper");
const UserEtt = require("./user.ett");

class AccEtt extends Model {
  isValidPw(value) {
    const pass = this.getDataValue("password");
    return value == pass;
    // return DataHelper.CompareStrHash(value, pass);
  }
}

AccEtt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    gender: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
      validate: {
        isIn: [[0, 1, 2]],
      },
    },
    birthDay: {
      type: DataTypes.DATEONLY,
    },
    email: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return "*******";
      },
    },
  },
  {
    sequelize: SQLZConfig.SQLZInstance,
    freezeTableName: true,
    tableName: "account",
    indexes: [
      {
        unique: true,
        fields: ["email"],
      },
    ],
    createdAt: true,
    updatedAt: true,
  }
);

module.exports = AccEtt;
