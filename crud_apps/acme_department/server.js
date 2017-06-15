/*jshint node: true */
'use strict';

import http from 'http';
import app from './app';

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
	console.log(`listening on port ${process.env.PORT}`);
});


