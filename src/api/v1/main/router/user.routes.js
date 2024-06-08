const { Router } = require("express");
const UserController = require("../controller/user.controller");
const router = Router();

router.get("", UserController.getUsers);
router.get("/:idUser", UserController.getUserById);
router.get("/:idUser/accounts", UserController.getAccount);

class UserRouter {
  static router = router;
}

module.exports = UserRouter;
