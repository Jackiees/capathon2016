(function(app) {

    app.config(function ($stateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            views: {
                "main": {
                    controller: 'AboutController',
                    templateUrl: 'home/home.tpl.html'
                }
            },
            data:{ pageTitle: 'About' }
        });
    });

    app.controller('AboutController', function ($scope) {

        var init = function() {
            // A definitive place to put everything that needs to run when the controller starts. Avoid
            //  writing any code outside of this function that executes immediately.
        };

        init();
    });

}(angular.module("capathon.about", [
    'ui.router'
])));