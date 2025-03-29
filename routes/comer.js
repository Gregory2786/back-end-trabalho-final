const express = require("express");
const router = express.Router();

const  ComerController = require("../controllers/comerController");

router.post("/", ComerController.create);

module.exports = router;