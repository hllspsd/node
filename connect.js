const connect = require('connect');

var app = connect();

app.use('/admin', hello);//挂载
app.use(aa(123));
app.use(bb);

app.listen(3000);

function hello(req, res, next) {
	console.log('%s %s', req.url, req.method);
	next();
}

function aa(options) {
	return function(req, res, next) {
		console.log(options);
		next();
	}
}

function bb(req, res, next) {
	res.end('123');
}