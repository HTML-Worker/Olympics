(function () {
    angular
        .module("app")
        .controller("aboutCtrl", aboutCtrl);

    aboutCtrl.$inject = [
        "$scope",
        "$http"
    ];

    /**
     * 获取关于页面的数据
     * @param $scope
     * @param $http
     */
    function aboutCtrl($scope, $http) {
        getAboutData();

        /**
         * 获取关于数据
         */
        function getAboutData() {
            $http({
                method: "get",
                //url: configData.getDataUrl.title + "0" + "/5",
                url: "http://localhost:8080/OlympicsAPI/rest/UserInfoService/title/about/0/5",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function (data) {
                $scope.aboutData = data;
            }).error(function (data) {
                alert("网络请求失败！+ about");
            });
        }
    }
}());