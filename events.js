const EventEmitter = require('events').EventEmitter;
const http = require('http');

const channal = new EventEmitter();
channal.on('join', function() {
	console.log('Welcome');
})

http.createServer((req, res) => {
	console.log(123);
	if(req.url == '/') {
		res.setHeader('Location', 'http://baidu.com');
		//res.setHeader('Location', 'http://baidu.com');
		res.end('123');
	}
}).listen('3000', '127.0.0.1');

channal.emit('join');