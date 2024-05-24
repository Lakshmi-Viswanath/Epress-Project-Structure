const express = require("express");
const homeController = require("../../controllers/home.controller");
const todoRouter = require('./todo.router');

const router = express.Router();

router.use('/todo', todoRouter);
router.get('/home', homeController);

module.exports = router;