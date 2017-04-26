app.get("/login", function(req, res) {
    var user = req.query.username;
    var pwd = req.query.password;
    if (user === "xiaoming" && pwd === "abcd1234") {
        res.send("登录成功")
    } else {
        res.send("用户名密码错误")
    }
})