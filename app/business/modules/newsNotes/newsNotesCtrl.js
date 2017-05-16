(function () {
    angular
        .module("app")
        .controller("newsNotesCtrl", newsNotesCtrl);

    newsNotesCtrl.$inject = [
        "$scope",
        "$location",
        "$http",
        "$sce"
    ];

    /**
     * 新闻及事件模块
     */
    function newsNotesCtrl($scope, $location, $http, $sce) {
        $scope.content = "新闻及事件";
        getNewsData();

        function getNewsData() {
            $http({
                method: "get",
                url: configData.getDataUrl.newsNotes + "1",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                    //'Content-Type': 'text/plain'
                }
            }).success(function (data) {
                $scope.content = data[0];
                $scope.content.content = $sce.trustAsHtml($scope.content.content);
            }).error(function (data) {
                alert("error");
            });
        }
    }
}());



