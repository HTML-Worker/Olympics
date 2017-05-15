(function () {
    angular
        .module("app")
        .controller("adminViewCtrl", adminViewCtrl);

    adminViewCtrl.$inject = [
        "$scope",
        "$location"
    ];

    function adminViewCtrl($scope, $location) {
        $scope.newsNotesHide = false;
        $scope.dataViewHide = true;
        $scope.managementViewHide = true;
        $scope.examineViewHide = true;

        $scope.backToLogin = function () {
            location.hash = "/login";
        };

        $scope.dataViewShow = function () {
            $scope.dataViewHide = false;
            $scope.newsNotesHide = true;
            $scope.managementViewHide = true;
            $scope.examineViewHide = true;
        };

        $scope.managementShow = function () {
            $scope.managementViewHide = false;
            $scope.newsNotesHide = true;
            $scope.dataViewHide = true;
            $scope.examineViewHide = true;
        };

        $scope.examineShow = function () {
            $scope.examineViewHide = false;
            $scope.managementViewHide = true;
            $scope.newsNotesHide = true;
            $scope.dataViewHide = true;
        };
    }
}());