var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'cogovdev'
    },
    port: 3000,
    db: 'mysql://root@localhost/cogovdev'
  },

  test: {
    root: rootPath,
    app: {
      name: 'cogovdev'
    },
    port: 3000,
    db: 'mysql://root@localhost/cogovdev_test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'cogovdev'
    },
    port: 3000,
    db: 'mysql://root@localhost/cogovdev_production'
  }
};

module.exports = config[env];
