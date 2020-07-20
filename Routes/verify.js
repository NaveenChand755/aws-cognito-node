const express = require("express");
const router = express.Router({ mergeParams: true });
const cognitoController = require("../Controller/cognitoController");



/* User Verification. */
router.post("/", (req, res) => {
    cognitoController.verifyUser(req.body, data => {
      res.send(data);
    });
  });

  module.exports = router;