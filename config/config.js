var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';
/*
  173.194.244.81 --user=relief --password=
db - reliefdb
*/
var config = {
    development: {
        root: rootPath,
        app: {
            name: 'cogovdev'
        },
        port: 3000,
        db: 'mysql://root:@localhost/reliefdb'
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
        db: 'mysql://relief:reliefpwd@173.194.244.81/reliefdb'
    }
};

module.exports = config[env];