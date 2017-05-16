(function () {
    angular
        .module("app")
        .controller("titleListsCtrl", titleListsCtrl);

    titleListsCtrl.$inject = [
        "$scope",
        "$location",
        "$http",
    ];

    /**
     * 所有文章标题分页显示
     */
    function titleListsCtrl($scope, $location, $http) {
        $scope.getUrl = location.hash.split("/");
        $scope.pageSize = 4;
        $scope.pages = Math.ceil( 20 / $scope.pageSize); //分页数
        $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
        $scope.pageList = [];
        $scope.selPage = 1;
        $http({
            method: "post",
            url: "http://localhost:8080/OlympicsAPI/rest/UserInfoService/searchTitle",
            data: {
                table:$scope.getUrl[2],
                title: $("#searchTitle").val(),
                start: $("#linageSelect").val() * ($scope.selPage - 1),
                end: $("#linageSelect").val()
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            $scope.titleMessage = data;
        }).error(function (data) {
            bootbox.alert("服务器连接失败！");
        });

        /**
         * 捕获条件修改操作更新数据
         */
        $scope.search = function(){
            $http({
                method: "post",
                url: "http://localhost:8080/OlympicsAPI/rest/UserInfoService/searchTitle",
                data: {
                    table:$scope.getUrl[2],
                    title: $("#searchTitle").val(),
                    start: $("#linageSelect").val() * ($scope.selPage - 1),
                    end: $("#linageSelect").val()
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function (data) {
                $scope.titleMessage = data;
            }).error(function (data) {
                bootbox.alert("服务器连接失败！");
            });
        };
        //页码分页查询
        $scope.setData = function () {
            $http({
                method: "post",
                url: "http://localhost:8080/OlympicsAPI/rest/UserInfoService/searchTitle",
                data: {
                    table:$scope.getUrl[2],
                    title: $("#searchTitle").val(),
                    start: $("#linageSelect").val() * ($scope.selPage - 1),
                    end: $("#linageSelect").val()
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function (data) {
                $scope.titleMessage = data;
            }).error(function (data) {
                bootbox.alert("服务器连接失败！");
            });
        };
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
            //console.log("选择的页：" + page);
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
        //分页要repeat的数组
        for (var i = 0; i < $scope.newPages; i++) {
            $scope.pageList.push(i + 1);
        }
    }
}());



