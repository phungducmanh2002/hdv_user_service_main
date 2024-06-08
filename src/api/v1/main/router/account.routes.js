const { Router } = require("express");
const AccountController = require("../controller/account.controller");
const router = Router();

router.get("", AccountController.getAccounts);
router.get("/:idAccount", AccountController.getAccountById);
router.get("/:idAccount/users", AccountController.getUsers);

router.post("", AccountController.createAccount);
router.post("/:idAccount/users", AccountController.createUser);

class AccountRouter {
  static router = router;
}

module.exports = AccountRouter;
