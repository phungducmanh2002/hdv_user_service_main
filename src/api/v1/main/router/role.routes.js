const { Router } = require("express");
const router = Router();

router.get("/");

class RoleRouter {
  static router = router;
}

module.exports = RoleRouter;
