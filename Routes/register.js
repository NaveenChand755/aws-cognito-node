const express = require("express");
const router = express.Router({ mergeParams: true });
const cognitoController = require("../Controller/cognitoController");


/* User Registration. */
router.post("/", (req, res) => {
    cognitoController.signup(req.body, data => {
      res.send(data);
    });
  });

module.exports = router;