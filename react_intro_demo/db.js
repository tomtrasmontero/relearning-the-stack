const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL);

const User = conn.define('user', {
  name: Sequelize.STRING,
});

const sync = () => conn.sync({ force: true });

const seed = () => {
  const usernames = ['moe', 'larry', 'curly'];
  return sync()
    .then(() => Promise.all(usernames.map(name => User.create({ name }))));
};

module.exports = {
  sync,
  seed,
  models: {
    User,
  },
};
