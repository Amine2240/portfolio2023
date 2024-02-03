const express = require("express");
const router = express.Router();
const clientcontroller = require("../controllers/postcontroller");
const workscontroller = require("../controllers/saveworkscontroller");
const deleteworkscontroller = require("../controllers/deleteallworkscontroller.js");
const getallworks = require("../controllers/getworkscontroller.js");

router.post("/client", clientcontroller);
router.get("/api/works", workscontroller);
router.get("/api/deleteworks", deleteworkscontroller);
//we need late because we have to upgrade the projects description
router.get("/api/getallworks", getallworks);
module.exports = router;
