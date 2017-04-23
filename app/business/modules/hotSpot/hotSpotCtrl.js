(function () {
    angular
        .module("app")
        .controller("hotSpotCtrl", hotSpotCtrl);

    hotSpotCtrl.$inject = [
        "$scope",
        "$http"
    ];

    function hotSpotCtrl($scope, $http) {
        $http({
            method: "get",
            url: configData.getDataUrl.title + "dynamic" + "/0" + "/7",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            $scope.dynamic = data;
            //alert(data + "这是测试页面");
        }).error(function (data) {
            alert("error");
        });
    }
}());