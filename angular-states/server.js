const server = require('http').createServer(require('./app'));
const db = require('./db');
const port = process.env.PORT || 3000;

if(process.env.SYNC){
	db.sync()
	.then( () => {})
	.catch((err) => console.log(err));
}

server.listen(port, () => console.log(`listening on port ${port}`));