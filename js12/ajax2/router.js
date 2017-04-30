app.get("/loadMore", function(req, res) {
    var idx = req.query.index;
    var ndpg = req.query.needPage;
    var news = [];
    for (var i = 0; i < ndpg; i++) {
        news.push("新闻get" + (parseInt(idx) + i + 1))
    }
    res.send(news)
})

app.post("/loadMore", function(req, res) {
    var idx = req.body.index;
    var ndpg = req.body.needPage;
    var news = [];
    for (var i = 0; i < ndpg; i++) {
        news.push("新闻" + (parseInt(idx) + i + 1))
    }
    res.send(news)
})