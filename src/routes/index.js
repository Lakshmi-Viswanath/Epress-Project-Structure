const express = require("express");
const v1Router = require("./v1/index");
const v2Router = require("./v2/index");

const router = express.Router();

router.use('/v1', v1Router);
router.use('/v2', v2Router);


module.exports = router;