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

        /**
         * 登陆操作
         */
        $scope.loginSubmit = function () {
            if ("" === $scope.username || "" === $scope.password) {
                bootbox.alert("账号或密码不可为空！");
            } else if ("" === $("#captcha").val()) {
                bootbox.alert("请输入验证码！");
            }else{
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
                    else if ("0" === data[0].examine) {
                        bootbox.alert("账号审核中，请耐心等待！");
                    }else if ("2" === data[0].examine) {
                        bootbox.alert("账号审核不通过！");
                    }else {
                        pushLoginData(data[0]);
                        bootbox.alert("登录成功！");
                        if ("student" === data[0].message ) {
                            location.hash = "/manage/studentView";
                        }
                        else if ("teacher" === data[0].message) {
                            location.hash = "/manage/teacherView";
                        }
                        else if ("admin" === data[0].message) {
                            location.hash = "/manage/adminView";
                        }
                    }
                }).error(function (data) {
                    bootbox.alert("服务器连接失败！");
                });
            }
        };

        $scope.forget = function () {
          bootbox.alert("进行密码重置：<br>学生请联系指导老师!教师请联系特派员！");
        };

        /**
         * 录入登陆信息
         * @param data
         */
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