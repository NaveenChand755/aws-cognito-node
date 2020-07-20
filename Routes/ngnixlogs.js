const express = require("express");
const router = express.Router({ mergeParams: true });
const cognitoController = require("../Controller/cognitoController");


  router.get('/', async (req, res) => {
    try {
        const entries = await cognitoController.ngnixParser();
        res.send({entries: entries});
    } catch(err) { res.sendStatus(500); }
});

module.exports = router;