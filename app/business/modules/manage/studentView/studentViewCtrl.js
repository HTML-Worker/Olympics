(function () {
   angular
       .module("app")
       .controller("studentViewCtrl", studentViewCtrl);

    studentViewCtrl.$inject = [
        "$scope",
        "$location"
    ];

    function studentViewCtrl($scope, $location) {
        $scope.gameIssueHide = true;
        $scope.dataViewHide = true;
        $scope.newsNotesHide = false;

        $scope.backToLogin = function () {
            location.hash = "/login";
        };

        $scope.dataViewShow = function () {
            $scope.newsNotesHide = true;
            $scope.gameIssueHide = true;
            $scope.dataViewHide = false;
        };

        $scope.gameIssueShow = function () {
            $scope.gameIssueHide = false;
            $scope.newsNotesHide = true;
            $scope.dataViewHide = true;
        };
    }
}());