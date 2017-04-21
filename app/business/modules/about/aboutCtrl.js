(function () {
    angular
        .module("app")
        .controller("aboutCtrl", aboutCtrl);

    aboutCtrl.$inject = [
        "$scope"
    ];

    /**
     * 获取关于页面的数据
     * @param $scope
     * @param aboutService
     */
    function aboutCtrl($scope) {
        $.ajax({
            type: 'GET',
            async:false,
            url: 'http://localhost:8080/OlympicsAPI/rest/UserInfoService/aboutTitle',
            dataType: "jsonp",
            contentType: "application/x-www-form-urlencoded",
            jsonp: "callback",//服务端用于接收callback调用的function名的参数
            cache : false,
            error:function(){alert('系统连接失败，请稍后再试！')},
            success: function(obj){
                $scope.$apply(function () {
                    $scope.aboutData = obj;
                })
            }
        });
    }
}());