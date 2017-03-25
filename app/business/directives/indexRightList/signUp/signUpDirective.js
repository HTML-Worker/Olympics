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
        "$scope"
    ];

    function signUpCtrl($location, $scope) {
        $scope.signUpData = configData.indexContentRight[0];
    }
}());