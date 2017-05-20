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
        $scope.gameIssueHide = true;

        $scope.backToLogin = function () {
            location.hash = "/login";
        };

        $scope.dataViewShow = function () {
            $scope.dataViewHide = false;
            $scope.newsNotesHide = true;
            $scope.managementViewHide = true;
            $scope.examineViewHide = true;
            $scope.gameIssueHide = true;
        };

        $scope.managementShow = function () {
            $scope.managementViewHide = false;
            $scope.newsNotesHide = true;
            $scope.dataViewHide = true;
            $scope.examineViewHide = true;
            $scope.gameIssueHide = true;
        };

        $scope.examineShow = function () {
            $scope.examineViewHide = false;
            $scope.managementViewHide = true;
            $scope.newsNotesHide = true;
            $scope.dataViewHide = true;
            $scope.gameIssueHide = true;
        };

        $scope.gameIssueShow = function () {
            $scope.examineViewHide = true;
            $scope.managementViewHide = true;
            $scope.newsNotesHide = true;
            $scope.dataViewHide = true;
            $scope.gameIssueHide = false;
        }
    }
}());