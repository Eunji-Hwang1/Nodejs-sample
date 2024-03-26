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
const app = express();

//라우팅
const home = require("./routes/home");

// app setting
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); //use -> 미들 뭬어 등록 매서드

module.exports = app;