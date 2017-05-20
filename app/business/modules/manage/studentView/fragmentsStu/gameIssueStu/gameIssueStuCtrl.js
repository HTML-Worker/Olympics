(function () {
    angular
        .module("app")
        .controller("gameIssueStuCtrl", gameIssueStuCtrl);

    gameIssueStuCtrl.$inject = [
        "$scope",
        "$location",
        "$http"
    ];

    function gameIssueStuCtrl($scope, $location, $http) {
        /**
         * 获取登录者信息
         */
        $http({
            method: "get",
            url: configData.getDataUrl.loginIned,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            $scope.loginIned = data[0];
            $http({
                method: "get",
                url: configData.getDataUrl.studentLoginMessage + $scope.loginIned.username,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                    //'Content-Type': 'text/plain'
                }
            }).success(function (data) {
                $scope.studentData = data[0];
                if ($scope.studentData.pay === "1") {
                    $("#signSubmit").val("已报名").attr('disabled',"true");
                }
            }).error(function (data) {
                alert("获取数据失败！");
            });
        }).error(function (data) {
            alert("获取数据失败！");
        });

        $http({
            method: "get",
            url: configData.getDataUrl.getGameIssue,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            $scope.gameIssueData = data[0];
        }).error(function (data) {
            bootbox.alert("服务器连接失败！");
        });

        /**
         * 按钮事件
         */
        $scope.loginBack = function () {
            window.location.reload();
        };

        $scope.signSubmit = function () {
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
                    url: configData.getDataUrl.studentLoginMessage + $scope.loginIned.username,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                        //'Content-Type': 'text/plain'
                    }
                }).success(function (data) {
                    $scope.studentData = data[0];
                    $http({
                        method: "post",
                        url: configData.getDataUrl.changeStudentPay,
                        data: {
                            id: $scope.studentData.id
                        },
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }).success(function (data) {
                        if("success" === data) {
                            bootbox.alert("提交成功！");
                        }else {
                            bootbox.alert("提交失败！");
                        }
                    }).error(function (data) {
                        bootbox.alert("获取数据失败！");
                    });
                }).error(function (data) {
                    bootbox.alert("获取数据失败！");
                });
            }).error(function (data) {
                bootbox.alert("获取数据失败！");
            });
        };
    }
}());