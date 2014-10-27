(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });

//    app.run(function () {});

    app.controller('AppController', function ($scope, $window) {

      $scope.isAtTheTop = true;

      var initPagePosition = function() {
        $scope.$apply(function () {
            if(document.body.scrollTop < 20) {
              $scope.isAtTheTop = true;
            }
            else {
              $scope.isAtTheTop = false;
            }
        });
        };

        // set scroll binding
        angular.element($window).bind("scroll", function() {
          initPagePosition();
        });


    });

}(angular.module("capathon", [
    'capathon.home',
    'capathon.about',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
])));
