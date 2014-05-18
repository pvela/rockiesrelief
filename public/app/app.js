// This is the main app for the desktop application
'use strict';
// setup shortnames for useful libraries

$script('components/underscore/underscore-min.js', '_');
$script('components/moment/min/moment.min.js', 'moment');


// Declare app level module which depends on filters, and services
angular.module('rockieRelief', ['ngRoute','RR.services'])

    .config(['$routeProvider',function($routeProvider) {
        _.each(RRGlobals.routesList, function(route) {
            $routeProvider.when(route.route, {templateUrl: route.templateUrl, controller: route.controller});
        })
        // default route
        $routeProvider.otherwise({redirectTo: RRGlobals.defaultRoute});

    }])

    .run(['$rootScope','$location',function($rootScope,$location) {

        // set all the global variables in rootscope for use  in top3 rows

        $rootScope.userLoggedIn = RRGlobals.userLoggedIn ? "yes" : "no"

        $rootScope.templatePath = RRGlobals.templatePath

        // when there is a successful change change the title of the page
        $rootScope.$on('$routeChangeSuccess',function(event,current) {
            _.each(RRGlobals.routesList, function(route) {
                // extract only the names of the route without the / and params and look for a match
                var locationPath = $location.path().split("/").slice(1)[0];
                var routePath = route.route.split("/").slice(1)[0];
                if (routePath == locationPath) {
                    $rootScope.pageTitle=route.title
                }
            })
        });

    }])





