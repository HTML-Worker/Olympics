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
        var getDbMessage = getUrl.split("/");
        $http({
            method: "get",
            url: configData.getDataUrl.about + "/" + getDbMessage[0] + "/" + getDbMessage[1],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            $scope.aboutDocument = data[0];
            //alert(data + "这是测试页面");
        }).error(function (data) {
            alert("error");
        });
    }
}());