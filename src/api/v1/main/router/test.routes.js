const { Router } = require("express");
const router = Router();

router.use("", (req, res) => {
  throw { code: 404, message: "custome err" };
});

class TestRouter {
  static router = router;
}

module.exports = TestRouter;
