(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });

    app.run(function () {});

    app.controller('AppController', function ($scope, $window) {

        $scope.isAtTheTop = false;

        $scope.initPagePosition = function() {
            if(document.body.scrollTop === 0) {
                console.log("at the top!");
                $scope.isAtTheTop = true;
            }
            else {
                console.log("NOT at the top!");
                $scope.isAtTheTop = false;
            }
        };

        // set scroll binding
        angular.element($window).bind("scroll", function() {
            $scope.initPagePosition();
        });



        $scope.initPagePosition();

    });

}(angular.module("capathon", [
    'capathon.home',
    'capathon.about',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
])));
