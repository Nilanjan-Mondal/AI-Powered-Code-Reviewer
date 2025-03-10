const express = require("express");
const {getReview} = require("../controllers/ai.controller");

const router = express.Router();

router.post("/get-review", getReview);

module.exports = router;