const express = require("express");
const router = express.Router();
const clientcontroller = require("../controllers/postcontroller");
const workscontroller = require("../controllers/saveworkscontroller");

router.post("/client", clientcontroller);
router.get("/api/works", workscontroller);
module.exports = router;
