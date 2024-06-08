const { Router } = require("express");
const AccountRouter = require("./account.routes");
const AuthRouter = require("./auth.routes");
const RES = require("../payload/RES");
const UserRouter = require("./user.routes");
const TestRouter = require("./test.routes");
const EXMDW = require("../../middleware/ex.mdw");
const router = Router();

router.use("/accounts", AccountRouter.router);
router.use("/auth", AuthRouter.router);
router.use("/users", UserRouter.router);
router.use("/test", TestRouter.router);
router.use(EXMDW.handleErr);

class IDXRouter {
  static router = router;
}

module.exports = IDXRouter;
