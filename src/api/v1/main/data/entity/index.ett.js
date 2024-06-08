const DBConfig = require("../../../config/db.config");
const SQLZConfig = require("../../../config/sequelize.config");
const FileHelper = require("../../../helper/file.helper");
const AccEtt = require("./account.ett");
const RoleEtt = require("./role.ett");
const UserEtt = require("./user.ett");

AccEtt.hasMany(UserEtt, { foreignKey: "idAccount" });
UserEtt.belongsTo(AccEtt, { foreignKey: "idAccount" });

RoleEtt.hasMany(UserEtt, { foreignKey: "idRole" });
UserEtt.belongsTo(RoleEtt, { foreignKey: "idRole" });

const DB_GEN = FileHelper.getEnv("DB_GEN");
class IDXEtt {
  static async do() {
    if (DB_GEN == 1) {
      console.log("create table ...");
      await SQLZConfig.SQLZInstance.sync({ force: true });
      console.log("create table finish!");
      console.log("create default roles...");
      await RoleEtt.create({ name: "ADMIN" });
      await RoleEtt.create({ name: "HOTELIER" });
      await RoleEtt.create({ name: "CUSTOMER" });
      console.log("create default roles success!");
    }
  }
}

module.exports = IDXEtt;
