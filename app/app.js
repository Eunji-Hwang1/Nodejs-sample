// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//     if (req.url === "/") {
//         res.end("루트");
//     } else if (req.url === "/login") {
//         res.end("로그인");
//     }
// });

// app.listen(3001, () => {
//     console.log("http 서버");
// });

"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home");

// app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); //use -> 미들 뭬어 등록 매서드

module.exports = app;