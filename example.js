const http = require('http');
const path = require('path');
const express = require('express');
const router = require('./routes/index');
const favicon = require('serve-favicon');//设置favicon
const logger = require('morgan');//打印的nodejs 服务器接受到的请求的信息

const app = express();
const [hostname , port = 3000] = ['127.0.0.1', process.env.PORT];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', port);

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));

app.get('/', router);
/*const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');
})*/

const server = http.createServer(app);

server.listen(port);

/*server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
})*/

console.log(process.env.PORT || 3000);
