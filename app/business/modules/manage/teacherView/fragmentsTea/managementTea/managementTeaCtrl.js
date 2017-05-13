(function () {
    angular
        .module("app")
        .controller("managementTeaCtrl", managementTeaCtrl);

    managementTeaCtrl.$inject = [
        "$scope",
        "$location",
        "$http"
    ];

    function managementTeaCtrl($scope, $location, $http) {
        $scope.gradeSearch = "全部";
        $scope.count = 10;
        $scope.change = function(){
            $http({
                method: "post",
                url: "http://localhost:8080/OlympicsAPI/rest/StudentMessage/allStudentMessage",
                data: {
                    name: $("#searchName").val(),
                    grade: $("#gradeSearch").val(),
                    start: 0,
                    end: $("#linageSelect").val()
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function (data) {
                $scope.allStudentMessage = data;
            }).error(function (data) {
                bootbox.alert("服务器连接失败！");
            });
        };

        $http({
            method: "post",
            url: "http://localhost:8080/OlympicsAPI/rest/StudentMessage/allStudentMessage",
            data: {
                name: "",
                grade: $scope.gradeSearch,
                start: 0,
                end: 0
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            $scope.count = data.length;
            $scope.allStudentMessage = data.slice(0, $scope.pageSize);
        }).error(function (data) {
            bootbox.alert("服务器连接失败！");
        });
        //分页总数
        $scope.pageSize = 2;
        $scope.pages = Math.ceil( 20 / $scope.pageSize); //分页数
        $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
        $scope.pageList = [];
        $scope.selPage = 1;
        //页码分页查询
        $scope.setData = function () {
            $http({
                method: "post",
                url: "http://localhost:8080/OlympicsAPI/rest/StudentMessage/allStudentMessage",
                data: {
                    name: $("#searchName").val(),
                    grade: $("#gradeSearch").val(),
                    start: $("#linageSelect").val() * ($scope.selPage - 1),
                    end: $("#linageSelect").val()
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function (data) {
                $scope.allStudentMessage = data;
                if(data.length === 0) {
                    bootbox.alert("数据不足！")
                }
            }).error(function (data) {
                bootbox.alert("服务器连接失败！");
            });
            //$scope.items = $scope.data.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));//通过当前页数筛选出表格当前显示数据
        };
        //分页要repeat的数组
        for (var i = 0; i < $scope.newPages; i++) {
            $scope.pageList.push(i + 1);
        }
        //打印当前选中页索引
        $scope.selectPage = function (page) {
            //不能小于1大于最大
            if (page < 1 || page > $scope.pages) return;
            //最多显示分页数5
            if (page > 2) {
                //因为只显示5个页数，大于2页开始分页转换
                var newpageList = [];
                for (var i = (page - 3); i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)); i++) {
                    newpageList.push(i + 1);
                }
                $scope.pageList = newpageList;
            }
            $scope.selPage = page;
            $scope.setData();
            $scope.isActivePage(page);
            console.log("选择的页：" + page);
        };
        //设置当前选中页样式
        $scope.isActivePage = function (page) {
            return $scope.selPage == page;
        };
        //上一页
        $scope.Previous = function () {
            $scope.selectPage($scope.selPage - 1);
        };
        //下一页
        $scope.Next = function () {
            $scope.selectPage($scope.selPage + 1);
        };

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

        /**
         * 按钮事件
         */
        $scope.loginBack = function () {
            window.location.reload();
        };
    }
}());