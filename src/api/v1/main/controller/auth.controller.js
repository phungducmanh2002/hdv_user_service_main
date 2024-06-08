const DataHelper = require("../../helper/data.helper");
const RES = require("../payload/RES");
const AccService = require("../service/acc.sv");
const UserService = require("../service/user.sv");
const jwt = require("jsonwebtoken");

class AuthController {
  static genAccountToken = [
    async (req, res, next) => {
      try {
        const { email, password } = req.body;
        const acc = await AccService.getAccByEmail(email);
        if (!acc) {
          throw RES.BadRequest.setMessage("email not found");
        }
        if (!acc.isValidPw(password)) {
          throw RES.BadRequest.setMessage("invalid password");
        }
        const token = DataHelper.genToken(acc);
        res.json(RES.Oke.setData(token));
      } catch (error) {
        next(error);
      }
    },
  ];
  static genUserToken = [
    async (req, res, next) => {
      try {
        const { email, password, idRole } = req.body;
        if (!idRole) {
          throw RES.BadRequest.setMessage("invalid id role");
        }
        const acc = await AccService.getAccByEmail(email);
        if (!acc) {
          throw RES.BadRequest.setMessage("email not found");
        }
        if (!acc.isValidPw(password)) {
          throw RES.BadRequest.setMessage("invalid password");
        }
        const user = (await UserService.getUsersByIdAccount(acc.id, idRole))[0];
        if (!user) {
          throw RES.NotFound.setMessage("user not found");
        }
        const token = DataHelper.genToken(user);
        res.json(RES.Oke.setData(token));
      } catch (error) {
        next(error);
      }
    },
  ];
  static decodeToken = [
    (req, res, next) => {
      try {
        const token = req.body.token;
        const decodeToken = jwt.decode(token);
        res.json(RES.Oke.setData(decodeToken.id));
      } catch (error) {
        next(error);
      }
    },
  ];
}
module.exports = AuthController;
