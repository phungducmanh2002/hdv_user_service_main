const RES = require("../payload/RES");
const AccService = require("../service/acc.sv");
const UserService = require("../service/user.sv");

class UserController {
  static getUsers = [
    async (req, res, next) => {
      try {
        const users = await UserService.getUsers();
        res.json(RES.Oke.setData(users));
      } catch (error) {
        next(error);
      }
    },
  ];
  static getUserById = [
    async (req, res, next) => {
      try {
        const idUser = req.params.idUser;
        const user = await UserService.getUserById(idUser);
        res.json(RES.Oke.setData(user));
      } catch (error) {
        next(error);
      }
    },
  ];
  static getAccount = [
    async (req, res, next) => {
      try {
        const idUser = parseInt(req.params.idUser);
        const acc = await AccService.getAccByUser(idUser);
        res.json(RES.Oke.setData(acc));
      } catch (error) {
        next(error);
      }
    },
  ];
}
module.exports = UserController;
