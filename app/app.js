"use strict";

//will use ECMAScript

// express 사용하기!
// modle
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//routing
const home = require("./src/routes/home")

//app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true}));

app.use("/", home); //use -> 미들 웨어를 등록해주는 method

module.exports = app;


//npm init -v package.json (default) 만들기



// express 사용 안 할시 코드 복잡

// const http = require("http");
// const app = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end("This is the route");
//   } else if (req.url === '/login') {
//     res.end("login page");
//   }
// });

// app.listen(3001, () => {
//   console.log("http server")
// })





