const server = require('http').createServer(require('./app'));
const port = process.env.PORT || 3000;

require('./db').syncAndSeed()
  .then( () => console.log('sync and seeded'))
  .catch( err => console.log(err));

server.listen(port, () => console.log(`listening on port ${port}`));