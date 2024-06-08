const UserEtt = require("../data/entity/user.ett");

class UserService {
  static async getUsersByIdAccount(idAccount, idRole) {
    const condition = {
      idAccount: idAccount,
    };
    if (idRole) {
      condition.idRole = idRole;
    }
    return await UserEtt.findAll({ where: condition });
  }

  static async getUser(idUser) {
    return await UserEtt.findByPk(idUser);
  }

  static async createUser(idAccount, username, idRole) {
    return await UserEtt.create({
      idAccount: idAccount,
      username: username,
      idRole: idRole,
    });
  }

  static async getUsers() {
    return await UserEtt.findAll();
  }

  static async getUserById(idUser) {
    return await UserEtt.findByPk(idUser);
  }
}

module.exports = UserService;
