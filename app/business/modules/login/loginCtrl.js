(function () {
    angular
        .module("app")
        .controller("loginCtrl", loginCtrl);

    loginCtrl.$inject = [
        "$scope",
        "$location",
        "$http"
    ];

    function loginCtrl($scope, $location, $http) {
        $scope.username = "";
        $scope.password = "";

        $scope.loginSubmit = function () {
            if ("" === $scope.username || "" === $scope.password) {
                bootbox.alert("账号或密码不可为空！");
            } else {
                $http({
                    method: "post",
                    url: "http://localhost:8080/OlympicsAPI/rest/LandMessage/land",
                    data: {
                        username: $scope.username,
                        password: $scope.password
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).success(function (data) {
                    if ("false" === data[0].flag) {
                        bootbox.alert("账号或密码错误！");
                        $scope.username = "";
                        $scope.password = "";
                    }
                    else {
                        bootbox.alert("登录成功！");
                        if (data[0].message === "student") {
                            pushLoginData(data[0]);
                            location.hash = "/manage/studentView";
                        }
                    }
                }).error(function (data) {
                    bootbox.alert("服务器连接失败！");
                });
            }
        };

        function pushLoginData(data) {
            $http({
                method: "post",
                url: "http://localhost:8080/OlympicsAPI/rest/LandMessage/loginIn",
                data: {
                    username: $scope.username,
                    identity: data.message,
                    landing: 1
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function (data) {
            }).error(function (data) {
            });
        }
    }
}());