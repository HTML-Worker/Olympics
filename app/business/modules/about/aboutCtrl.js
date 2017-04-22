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
     */
    function aboutCtrl($scope, $http) {
        getAboutData();

        /**
         * 获取关于数据
         */
        function getAboutData() {
            // $.ajax({
            //     type: 'GET',
            //     async:false,
            //     url: 'http://localhost:8080/OlympicsAPI/rest/UserInfoService/aboutTitle',
            //     dataType: "jsonp",
            //     contentType: "application/x-www-form-urlencoded",
            //     jsonp: "callback",//服务端用于接收callback调用的function名的参数
            //     cache : false,
            //     error:function(){alert('系统连接失败，请稍后再试！')},
            //     success: function(obj){
            //         $scope.$apply(function () {
            //             $scope.aboutData = obj;
            //         })
            //     }
            // });
            $http({
                method: "get",
                url: "http://localhost:8080/OlympicsAPI/rest/UserInfoService/aboutTitle",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function (data) {
                $scope.aboutData = data;
            }).error(function (data) {
                alert("网络请求失败！");
            });
        }
    }
}());