const http = require('http');
const parse = require('url').parse;
const join = require('path').join;
const fs = require('fs');

const root = __dirname;

const server = http.createServer(function(req, res) {
	let url = parse(req.url);
	let path = join(root, url.pathname);
	let stream = fs.createReadStream(path);
	/*stream.on('data', function(chunk) {
		res.write(chunk);
	});
	stream.on('end', function() {
		res.end();
	});
	stream.on('error', function() {
		res.statusCode = 500;
		res.end('error');
	});*/
	stream.pipe(res);
	res.statusCode = 404;
})

server.listen(3000, function() {
	console.log('server port on 3000');
});