
var _ = require('underscore')

exports.create = function(req, res) {
    var getConfig = function(params) {

        var templatePath = 'partials'

        // list all the routes here
        var routesList = {
            loginView: {
                title : 'Login'
                , route: '/login'
                , controller: 'loginViewController'
                , template: '/loginView.html'
            },

            dashboardView: {
                title : 'Dashboard'
                , route: '/dashboard'
                , controller: 'dashboardViewController'
                , template: '/dashboardView.html'
            },

            categoryView: {
                title : 'Manage Categories'
                , route: '/categories'
                , controller: 'categoryViewController'
                , template: '/categoryView.html'
            },

            shelfView: {
                title : 'Manage Shelves'
                , route: '/shelves'
                , controller: 'shelfViewController'
                , template: '/shelfView.html'
            },

            usersView: {
                title : 'Manage Users'
                , route: '/users'
                , controller: 'userViewController'
                , template: '/userView.html'
            },

            volunteersView: {
                title : 'Manage Volunteers'
                , route: '/volunteers'
                , controller: 'volunteerViewController'
                , template: '/volunteerView.html'
            }
        }

        var defaultRoute
        var routesListForThisUser = []

            _.each(routesList, function(route) {
                var templateUrl = templatePath+route.template
                var routeItem = {
                    route : route.route,
                    templateUrl : templateUrl,
                    controller : route.controller,
                    title : route.title
                }
                routesListForThisUser.push(routeItem)
            })
            defaultRoute = '/dashboard'

        return {
            currentVersion : '1.0'
            ,templatePath : templatePath
            ,routesList : routesListForThisUser
            ,defaultRoute : defaultRoute
            ,userLoggedIn : params.userLoggedIn
            ,baseUrl : params.baseUrl
            ,clientDebug:params.clientDebug
        }
    }

    var params = {
        baseUrl  : 'http://'+req.headers.host,
        userLoggedIn : req.loggedIn
    }
    res.setHeader('Content-Type','text/javascript');
    res.send("var RRGlobals = "+JSON.stringify(getConfig(params)))
}

/*
 if (params.userLoggedIn) {
 _.each(routesList, function(route) {
 if (route.displayFor.indexOf(params.customerCode) > -1 ) {
 var templateUrl = templatePath+route.template
 var routeItem = {
 route : route.route,
 templateUrl : templateUrl,
 controller : route.controller,
 title : route.title
 }
 routesListForThisUser.push(routeItem)
 }
 })
 defaultRoute = '/dashboard'
 } else {
 _.each(routesList, function(route) {
 // user is not logged in so send route only for login
 if (route.route == "/login") {
 var templateUrl = templatePath+route.template
 var routeItem = {
 route : route.route,
 templateUrl : templateUrl,
 controller : route.controller,
 title : route.title
 }
 routesListForThisUser.push(routeItem)
 }
 })
 defaultRoute = '/login'
 }
 */

