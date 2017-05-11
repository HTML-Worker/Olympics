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

        $scope.backToLogin = function () {
            location.hash = "/login";
        };

        $scope.dataViewShow = function () {
            $scope.newsNotesHide = true;
            $scope.dataViewHide = false;
        }
    }
}());