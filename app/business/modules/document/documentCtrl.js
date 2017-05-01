(function () {
    angular
        .module("app")
        .controller("documentCtrl", documentCtrl);

    documentCtrl.$inject = [
        "$scope",
        "$http",
        "$routeParams",
        "$sce"
    ];

    function documentCtrl($scope, $http, $routeParams, $sce) {
        var getUrl = $routeParams.about;
        //var getDbMessage = getUrl.split("/");
        $http({
            method: "get",
            url: configData.getDataUrl.document + getUrl,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                //'Content-Type': 'text/plain'
            }
        }).success(function (data) {
            $scope.document = data[0];
            $scope.document.content = $sce.trustAsHtml($scope.document.content);
        }).error(function (data) {
            alert("error");
        });
    }
}());