(function () {
    angular
        .module("app")
        .controller("dataAdmViewCtrl", dataAdmViewCtrl);

    dataAdmViewCtrl.$inject = [
        "$scope",
        "$location",
        "$http"
    ];

    function dataAdmViewCtrl($scope, $location, $http) {
        $scope.inputPE = true;
        $http({
            method: "get",
            url: configData.getDataUrl.loginIned,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                //'Content-Type': 'text/plain'
            }
        }).success(function (data) {
            $scope.loginIned = data[0];
            $http({
                method: "get",
                url: configData.getDataUrl.adminMessage + $scope.loginIned.username,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                    //'Content-Type': 'text/plain'
                }
            }).success(function (data) {
                $scope.adminData = data[0];
            }).error(function (data) {
                alert("获取数据失败！");
            });
        }).error(function (data) {
            alert("获取数据失败！");
        });

        /**
         * 按钮事件
         */
        $scope.loginBack = function () {
            window.location.reload();
        };

        $scope.changePE = function () {
            $scope.inputPE = false;
        };

        /**
         * 修改信息
         */
        $scope.submitPE = function () {
            $http({
                method: "post",
                url: configData.getDataUrl.adminPEChange,
                data: {
                    username: $scope.adminData.username,
                    phone: $scope.adminData.phone,
                    email: $scope.adminData.email,
                    address: $scope.adminData.address,
                    zipCode: $scope.adminData.zipCode
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function (data) {
                if ("success" === data) {
                    bootbox.alert("修改成功！");
                    $scope.inputPE = true;
                }else {
                    bootbox.alert("修改失败！");
                }
            }).error(function (data) {
                bootbox.alert("服务器连接失败！");
            });
        };

        /**
         * 修改密码功能
         */
        $scope.changePassword = function () {
            if ($("#oldPassword").val() !== $scope.adminData.password) {
                bootbox.alert("原密码不正确!");
                $("#oldPassword").val("");
                $("#newPassword").val("");
                $("#confirmPassword").val("");
            }
            else if ($("#newPassword").val() !== $("#confirmPassword").val()) {
                bootbox.alert("两次密码不一致!");
                $("#newPassword").val("");
                $("#confirmPassword").val("");
            }
            else {
                $http({
                    method: "post",
                    url: "http://localhost:8080/OlympicsAPI/rest/AdminMessage/adminPasswordChange",
                    data: {
                        username: $scope.adminData.username,
                        password: $("#newPassword").val()
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).success(function (data) {
                    if ("success" === data) {
                        bootbox.alert("修改成功！");
                        $("#oldPassword").val("");
                        $("#newPassword").val("");
                        $("#confirmPassword").val("");
                    }else {
                        bootbox.alert("修改失败！");
                    }
                }).error(function (data) {
                    bootbox.alert("服务器连接失败！");
                });
            }
        };
    }
}());