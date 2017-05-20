(function () {
    angular
        .module("app")
        .controller("gameIssueCtrl", gameIssueCtrl);

    gameIssueCtrl.$inject = [
        "$scope",
        "$location",
        "$http"
    ];

    function gameIssueCtrl($scope, $location, $http) {
        $scope.entryType = selectData.entryType;

        /**
         * 获取登录者信息
         */
        $http({
            method: "get",
            url: configData.getDataUrl.loginIned,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                //'Content-Type': 'text/plain'
            }
        }).success(function (data) {
            $scope.loginIned = data[0];
        }).error(function (data) {
            alert("获取数据失败！");
        });

        $scope.gameIssueSubmit = function () {
            bootbox.confirm("确定更新赛事并删除已报名学生信息吗？", function(result) {
                if (result) {
                    $http({
                        method: "post",
                        url: "http://localhost:8080/OlympicsAPI/rest/GameIssue/newGameIssue",
                        data: {
                            id:"",
                            name: $("#name").val(),
                            type: $("#entryType").val(),
                            time_start: $("#timeStart").val(),
                            time_end: $("#timeEnd").val()
                        },
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }).success(function (data) {
                        if ( "success" === data) {
                            bootbox.alert("发布成功！");
                        }else {
                            bootbox.alert("发布失败，请重新发布！");
                        }
                    }).error(function (data) {
                        bootbox.alert("服务器连接失败！");
                    });
                } else {

                }
            });
         };

        /**
         * 按钮事件
         */
        $scope.loginBack = function () {
            window.location.reload();
        };
    }
}());