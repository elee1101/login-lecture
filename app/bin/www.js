"use strict";

//서버 띄워주는 코드

const app = require("../app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log("server enable")
});