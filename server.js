// npm i express ejs mysql2 jsonwebtoken dotenv bcrypt multer
const express = require("express");
const app = express();
const path = require("path");


app.set ("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended : false}))


//------ 프론트 테스트 라우터 --------------------
// 로그인 테스트 라우터
app.get("/", (req,res)=> {
    res.render("login/login")
})
// 메인 테스트 라우터
app.get("/main", (req,res)=> {
    res.render("main/main")
})
// 글쓰기 테스트 라우터
app.get("/write", (req,res)=> {
    res.render("diary/write")
})
// 리스트 테스트 라우터
app.get("/list", (req,res)=> {
    res.render("diary/list")
})
// 상세페이지 테스트 라우터
app.get("/detail", (req,res)=> {
    res.render("diary/detail")
})
// 커뮤니티 테스트 라우터
app.get("/community", (req,res)=> {
    res.render("community/community")
})
// 마이페이지 테스트 라우터
app.get("/mypage", (req,res)=> {
    res.render("mypage/mypage")
})
// 통계페이지 테스트 라우터
app.get("/statistics", (req,res)=> {
    res.render("statistics/statistics")
})




app.listen(3000, (req,res)=> {
    console.log("server on")
})