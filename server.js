// npm i express ejs mysql2 jsonwebtoken dotenv bcrypt multer
const express = require("express");
const app = express();
const path = require("path");


app.set ("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended : false}))

// 로그인 테스트 라우터
app.get("/", (req,res)=> {
    res.render("login/login")
})

app.listen(3000, (req,res)=> {
    console.log("server on")
})