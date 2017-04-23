(function () {
    angular
        .module("app")
        .controller("documentCtrl", documentCtrl);

    documentCtrl.$inject = [
        "$scope",
        "$http",
        "$routeParams"
    ];

    function documentCtrl($scope, $http, $routeParams) {
        var getUrl = $routeParams.about;
        //var getDbMessage = getUrl.split("/");
        $http({
            method: "get",
            url: configData.getDataUrl.document + getUrl,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            $scope.document = data[0];
        }).error(function (data) {
            alert("error");
        });
    }
}());