(function () {
    angular
        .module("app")
        .directive("signUpDirective", signUpDirective);

    angular
        .module("app")
        .controller("signUpCtrl", signUpCtrl);

    function signUpDirective() {
        return {
            restrict: 'AE',
            controller: 'signUpCtrl',
            templateUrl: 'business/directives/indexRightList/signUp/signUpDirective.html',
            scope: {},
            replace: true
        };
    }

    signUpCtrl.$inject = [
        "$location",
        "$scope",
        "$http"
    ];

    function signUpCtrl($location, $scope, $http) {
        $scope.signUpData = configData.indexContentRight[0];
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
        //
        //     }
        // });
    }
}());