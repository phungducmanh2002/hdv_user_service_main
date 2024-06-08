const RES = require("../payload/RES");
const AccService = require("../service/acc.sv");
const UserService = require("../service/user.sv");

class AccountController {
  static getAccounts = [
    async (req, res, next) => {
      try {
        const accs = await AccService.getAccs();
        res.json(RES.Oke.setData(accs));
      } catch (error) {
        res.json(RES.ServerError.setData(error));
      }
    },
  ];
  static getAccountById = [
    (req, res, next) => {
      next(RES.Developing);
    },
  ];
  static createAccount = [
    async (req, res, next) => {
      const { firstName, lastName, email, password, gender, birthDay } =
        req.body;
      console.log(req.body);
      try {
        const acc = await AccService.createAcc(
          firstName,
          lastName,
          email,
          password,
          gender,
          birthDay
        );
        res.json(RES.Created.setData(acc));
      } catch (error) {
        next(error);
      }
    },
  ];

  static createUser = [
    async (req, res, next) => {
      const idAccount = req.params.idAccount;
      const { username, idRole } = req.body;
      if (!idAccount || !username || !idRole) {
        throw RES.BadRequest.setMessage("provide request data!");
      }
      try {
        const user = await UserService.createUser(idAccount, username, idRole);
        res.json(RES.Oke.setData(user));
      } catch (error) {
        next(error);
      }
    },
  ];
  static getUsers = [
    async (req, res, next) => {
      const idAccount = req.params.idAccount;
      const idRole = req.query?.role;
      try {
        const users = await UserService.getUsersByIdAccount(idAccount, idRole);
        res.json(RES.Oke.setData(users));
      } catch (error) {
        next(error);
      }
    },
  ];
  static getUserRole = [];
}

module.exports = AccountController;
