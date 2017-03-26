(function () {
    angular
        .module("app")
        .directive("contactDirective", contactDirective);

    angular
        .module("app")
        .controller("contactCtrl", contactCtrl);

    function contactDirective() {
        return {
            restrict: 'AE',
            controller: 'contactCtrl',
            templateUrl: 'business/directives/indexRightList/contact/contactDirective.html',
            scope: {},
            replace: true
        };
    }

    contactCtrl.$inject = [
        "$location",
        "$scope"
    ];

    function contactCtrl($location, $scope) {
        $scope.contactData = configData.indexContentRight[3];
    }
}());