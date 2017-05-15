(function () {
    angular
        .module("app")
        .controller("examineAdmCtrl",examineAdmCtrl);

    examineAdmCtrl.$inject = [
        "$scope",
        "$location",
        "$http"
    ];

    function examineAdmCtrl($scope, $location, $http) {
        $scope.gradeSearch = "全部";
        $scope.count = 10;
        $scope.pageSize = 4;
        $scope.pages = Math.ceil( 20 / $scope.pageSize); //分页数
        $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
        $scope.pageList = [];
        $scope.selPage = 1;
        $scope.checkboxs = [];

        /**
         * 获取正在登陆的用户信息
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
                url: configData.getDataUrl.adminMessage + $scope.loginIned.username,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                    //'Content-Type': 'text/plain'
                }
            }).success(function (data) {
                $scope.adminData = data[0];
                $http({
                    method: "get",
                    url: configData.getDataUrl.allTeacherMessage,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).success(function (data) {
                    $scope.count = examineChange(data).length;
                    $scope.allTeacherMessage = examineChange(data).slice(0, $scope.pageSize);
                }).error(function (data) {
                    bootbox.alert("服务器连接失败！");
                });
            }).error(function (data) {
                alert("获取数据失败！");
            });
        }).error(function (data) {
            alert("获取数据失败！");
        });

        /**
         * 捕获条件修改操作更新数据
         */
        $scope.change = function(){
            $http({
                method: "post",
                url: "http://localhost:8080/OlympicsAPI/rest/TeacherMessage/getTeacherMessageRule",
                data: {
                    examine: $("#examineGradeSearch").val(),
                    name: $("#examineSearchName").val(),
                    start: 0,
                    end: $("#examineLinageSelect").val()
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function (data) {
                $scope.allTeacherMessage = examineChange(data);
            }).error(function (data) {
                bootbox.alert("服务器连接失败！");
            });
        };
        //页码分页查询
        $scope.setData = function () {
            $http({
                method: "post",
                url: "http://localhost:8080/OlympicsAPI/rest/TeacherMessage/getTeacherMessageRule",
                data: {
                    name: $("#examineSearchName").val(),
                    examine: $("#examineGradeSearch").val(),
                    start: $("#examineLinageSelect").val() * ($scope.selPage - 1),
                    end: $("#examineLinageSelect").val()
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function (data) {
                if(data.length === 0) {
                    $scope.allTeacherMessage = [];
                    bootbox.alert("数据不足！");
                }else {
                    $scope.allTeacherMessage = examineChange(data);
                }
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
        /**
         * 按钮事件
         */
        $scope.loginBack = function () {
            window.location.reload();
        };

        /**
         * 复选框选中样式修改
         * @param btn
         */
        $scope.checkbox = function (btn) {
            if ($("#examine" + btn)[0].checked) {
                $("#examine" + btn).parent().prevAll().andSelf().css("background-color", "#dff0d8");
            }else {
                $("#examine" + btn).parent().prevAll().andSelf().css("background-color", "#f9f9f9");
            }
            $scope.checkboxs.push(btn);
        };

        /**
         * 审核同意
         */
        $scope.resetPasswordButton = function () {
            if (0 === $scope.checkboxs.length) {
                bootbox.alert("请选择要操作的对象！");
            } else {
                $http({
                    method: "post",
                    url: configData.getDataUrl.teacherExamine,
                    data: {
                        teacherNum: $scope.checkboxs,
                        examine: "true"
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).success(function (data) {
                    if (data === "success") {
                        $scope.checkboxs = [];
                        bootbox.alert("审核已通过，请刷新后查看！");
                    }
                }).error(function (data) {
                    bootbox.alert("服务器连接失败！");
                });
            }
        };

        /**
         * 审核拒绝
         */
        $scope.deleteButton = function () {
            if (0 === $scope.checkboxs.length) {
                bootbox.alert("请选择要操作的对象！");
            } else {
                $http({
                    method: "post",
                    url: configData.getDataUrl.teacherExamine,
                    data: {
                        teacherNum: $scope.checkboxs,
                        examine: "false"
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).success(function (data) {
                    if (data === "success") {
                        $scope.checkboxs = [];
                        bootbox.alert("已拒绝，请刷新后查看！");
                    }
                }).error(function (data) {
                    bootbox.alert("服务器连接失败！");
                });
            }
        };
    }

    /**
     * 审核状态转换
     * @param data
     * @returns {*}
     */
    function examineChange(data) {
        var examineData = data;
        for (var item in examineData) {
            if ( "0" === examineData[item].examine) {
                examineData[item].examine = "未审核";
            }else if ( "1" === examineData[item].examine) {
                examineData[item].examine = "审核通过";
            }else if ( "2" === examineData[item].examine) {
                examineData[item].examine = "已拒绝";
            }
        }
        return examineData;
    }
}());