const AccEtt = require("../data/entity/account.ett");
const UserEtt = require("../data/entity/user.ett");
const RES = require("../payload/RES");

class AccService {
  static async createAcc(
    firstName,
    lastName,
    email,
    password,
    gender,
    birthDay
  ) {
    return await AccEtt.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      gender: gender,
      birthDay: new Date(birthDay),
    });
  }
  static async getAccs() {
    return await AccEtt.findAll();
  }
  static async getAccByUser(idUser) {
    const user = await UserEtt.findByPk(idUser);
    if (!user) {
      throw RES.NotFound.setMessage("user not found");
    }
    return await AccEtt.findByPk(user.idAccount);
  }
  static async getAccByEmail(email) {
    return await AccEtt.findOne({ where: { email: email } });
  }
}

module.exports = AccService;
