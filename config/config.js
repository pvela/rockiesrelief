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
        db: 'postgres://ucxmwrzqjuahnf:T_b9-BLUKHqDEHzsQSwmrZVAtN@ec2-54-225-101-119.compute-1.amazonaws.com:5432/d7mkneoe8vasis'
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
        db: 'postgres://ucxmwrzqjuahnf:T_b9-BLUKHqDEHzsQSwmrZVAtN@ec2-54-225-101-119.compute-1.amazonaws.com:5432/d7mkneoe8vasis'
    }
};

module.exports = config[env];