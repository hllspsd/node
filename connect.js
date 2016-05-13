const connect = require('connect');
const parse = require('url').parse;
const cookieParser = require('cookie-parser');

var app = connect();

app.use('/admin', hello);//挂载
app.use(connect.cookieParser('213'));
app.use(aa(123));
app.use(bb);

app.listen(3000);

function hello(req, res, next) {
	console.log('%s %s', req.url, req.method);
	if(req.url == '/') {
		console.log(req.cookies);
		//console.log(parse(req.url));
		res.end(parse(req.url).toString());
		return;
	}
	next();
}

function aa(options) {
	return function(req, res, next) {
		//console.log(parse(req.url));
		next();
	}
}

function bb(req, res, next) {
	res.end('1234');
}