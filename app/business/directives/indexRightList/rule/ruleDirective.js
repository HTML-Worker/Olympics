(function () {
    angular
        .module("app")
        .directive("ruleDirective", ruleDirective);

    angular
        .module("app")
        .controller("ruleCtrl", ruleCtrl);

    function ruleDirective() {
        return {
            restrict: 'AE',
            controller: 'ruleCtrl',
            templateUrl: 'business/directives/indexRightList/rule/ruleDirective.html',
            scope: {},
            replace: true
        };
    }

    ruleCtrl.$inject = [
        "$location",
        "$scope"
    ];

    function ruleCtrl($location, $scope) {
        $scope.ruleData = configData.indexContentRight[1];
}
}());