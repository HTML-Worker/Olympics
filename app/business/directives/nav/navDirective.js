(function () {
    angular
        .module("app")
        .directive("navDirective", navDirective);

    angular
        .module("app")
        .controller("navCtrl", navCtrl);

    function navDirective() {
        return {
            restrict: 'AE',
            controller: 'navCtrl',
            templateUrl: 'business/directives/nav/navDirective.html',
            scope: {},
            replace: true
        };
    }

    navCtrl.$inject = [
        "$location",
        "$scope"
    ];

    function navCtrl($location, $scope) {
        $scope.navData = configData.nav;
        // $scope.urlRedirect = function (data) {
        //     if (data.redirect === true) {
        //         location.href = data.url;
        //     }
        // }
    }
}());