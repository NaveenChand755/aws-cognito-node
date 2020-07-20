const express = require("express");
const router = express.Router({ mergeParams: true });
const cognitoController = require("../Controller/cognitoController");

/* User Login. */
router.post("/", (req, res) => {
    cognitoController.login(req.body, data => {
      res.send(data);
    });
  });


  module.exports = router;
