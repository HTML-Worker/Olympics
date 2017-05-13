(function () {
    angular
        .module("app")
        .controller("teacherViewCtrl", teacherViewCtrl);

    teacherViewCtrl.$inject = [
        "$scope",
        "$location"
    ];

    function teacherViewCtrl($scope, $location) {
        $scope.newsNotesHide = false;
        $scope.dataViewHide = true;
        $scope.managementViewHide = true;

        $scope.backToLogin = function () {
            location.hash = "/login";
        };

        $scope.dataViewShow = function () {
            $scope.newsNotesHide = true;
            $scope.dataViewHide = false;
            $scope.managementViewHide = true;
        };

        $scope.managementShow = function () {
            $scope.newsNotesHide = true;
            $scope.dataViewHide = true;
            $scope.managementViewHide = false;
        };
    }
}());