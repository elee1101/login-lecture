"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);

//login 정보 전달되는 경로?
router.post("/login", ctrl.process.login);

//router를 사용할 수 있도록 외부로 export
module.exports = router;