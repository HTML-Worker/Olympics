(function () {
   angular
       .module("app")
       .controller("studentViewCtrl", studentViewCtrl);

    studentViewCtrl.$inject = [
        "$scope",
        "$location"
    ];

    function studentViewCtrl($scope, $location) {
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