const http = require('http');
const fs = require('fs');

const [hostname, port] = ['127.0.0.1', 3000];

http.createServer(function(req, res) {
	if(req.url == '/') {
		fs.readFile('./json/title.json', function(err, data) {
			if(err) {
				console.error(err);
				res.end('Server Error');
			} else {
				let titles = JSON.parse(data.toString());
				console.log(titles);
				fs.readFile('./json/template.html', function(err, data) {
					if(err) {
						console.error(err);
						res.end('Server Error');
					} else {
						let tmpl = data.toString();
						let html = tmpl.replace('%', titles.join('</li><li>'));
						res.writeHead(200, {'Content-Type': 'text/html'});
						res.end(html);
					}
				});
			}
		})
	}
}).listen(port, hostname);