const express = require("express");
const router = express.Router();

const  BeberController = require("../controllers/beberController");

router.post("/", BeberController.create);

module.exports = router;