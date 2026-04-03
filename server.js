const express = require('express');
const path = require('path');
const app = express();

// 你自己的密码
const PASSWORD = "20070407";

let loginSuccess = false;

app.use(express.urlencoded({ extended: true }));

// 访问网站先看有没有登录
app.get('/', (req, res) => {
    if (loginSuccess) {
        res.sendFile(path.join(__dirname, 'index.html'));
    } else {
        res.sendFile(path.join(__dirname, 'login.html'));
    }
});

// 验证密码
app.post('/login', (req, res) => {
    if (req.body.password === PASSWORD) {
        loginSuccess = true;
        res.redirect('/');
    } else {
        res.send('<h1>密码错误，无权访问</h1><a href=" ">返回</a >');
    }
});

app.listen(3000, () => {
    console.log("网站运行在: http://localhost:3000");
});