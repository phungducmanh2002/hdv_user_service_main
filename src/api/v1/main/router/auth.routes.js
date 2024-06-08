const { Router } = require("express");
const AuthController = require("../controller/auth.controller");
const router = Router();

router.post("/gen-user-token", AuthController.genUserToken);
router.post("/gen-account-token", AuthController.genAccountToken);
router.post("/decode-token", AuthController.decodeToken);

class AuthRouter {
  static router = router;
}

module.exports = AuthRouter;
