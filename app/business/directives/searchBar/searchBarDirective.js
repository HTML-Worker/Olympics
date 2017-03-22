(function () {
    angular
        .module("app")
        .directive("searchBarDirective", searchBarDirective);

    angular
        .module("app")
        .controller("searchBarCtrl", searchBarCtrl);

    function searchBarDirective() {
        return {
            restrict: 'AE',
            controller: 'searchBarCtrl',
            templateUrl: 'business/directives/searchBar/searchBarDirective.html',
            scope: {},
            replace: true
        };
    }

    searchBarCtrl.$inject = [
        "$location",
        "$scope"
    ];

    function searchBarCtrl($location, $scope) {
        $scope.searchBarData = configData.nav;
    }
}());