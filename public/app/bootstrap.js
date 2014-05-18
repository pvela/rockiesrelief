

$script([
    "components/underscore/underscore-min.js",
    "components/moment/min/moment.min.js"
], 'shortcuts')


$script.ready('shortcuts', function() {
    $script([
        "components/angular/angular.min.js",
        "components/angular-route/angular-route.min.js",
        "components/angular-resource/angular-resource.min.js",
        "/config",
        "app/controller.js",
        "app/models.js",
        "app/services.js",
        "app/app.js",
        ],
        'RRBundle'
    );
});

$script.ready('RRBundle', function() {
    console.log("Bootstrapping")
    // when all is done, execute bootstrap angular application
    angular.bootstrap(document, ['rockieRelief']);
});