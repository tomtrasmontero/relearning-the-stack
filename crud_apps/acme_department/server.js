'use strict';

const http = require('http');
const server = http.createServer(require('./app'));

server.listen(process.env.PORT, () => {
	console.log(`listening on port ${process.env.PORT}`);
});


