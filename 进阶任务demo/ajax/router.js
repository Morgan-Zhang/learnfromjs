// 服务端 router.js


app.get('/loadMore', function(req, res) {

	var curIdx = req.query.idx;
	var len = req.query.len;
	var data = [];

	for(var i = 0; i < len; i++) {
		data.push('新闻' + (parseInt(curIdx) + i));
	}

	res.send(data);
});


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
