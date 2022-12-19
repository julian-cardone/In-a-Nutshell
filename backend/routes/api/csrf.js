var express = require("express");
const { isProduction } = require("../../config/keys");
var router = express.Router();

if (!isProduction) {
  router.get("/restore", function (req, res) {
    const csrfToken = req.csrfToken();
    res.status(200).json({
      "CSRF-Token": csrfToken,
    });
  });
}

module.exports = router;
