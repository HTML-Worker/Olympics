(function () {
    angular
        .module("app")
        .directive("linksDirective", linksDirective);

    angular
        .module("app")
        .controller("linksCtrl", linksCtrl);

    function linksDirective() {
        return {
            restrict: 'AE',
            controller: 'linksCtrl',
            templateUrl: 'business/directives/indexRightList/links/linksDirective.html',
            scope: {},
            replace: true
        };
    }

    linksCtrl.$inject = [
        "$location",
        "$scope"
    ];

    function linksCtrl($location, $scope) {
        $scope.linksData = configData.indexContentRight[2];
    }
}());