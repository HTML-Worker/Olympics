(function () {
    angular
        .module("app")
        .directive("signUpDirective", signUpDirective);

    angular
        .module("app")
        .controller("signUpCtrl", signUpCtrl);

    function signUpDirective() {
        return {
            restrict: 'AE',
            controller: 'signUpCtrl',
            templateUrl: 'business/directives/indexRightList/signUp/signUpDirective.html',
            scope: {},
            replace: true
        };
    }

    signUpCtrl.$inject = [
        "$location",
        "$scope",
        "$http"
    ];

    function signUpCtrl($location, $scope, $http) {
        $scope.signUpData = configData.indexContentRight[0];
        $scope.urlRedirect = function (data) {
            if (data.redirect === true) {
                location.href = data.url;
            }
        }
    }
}());