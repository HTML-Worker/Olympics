(function () {
    angular
        .module("app")
        .controller("managementAdmCtrl", managementAdmCtrl);

    managementAdmCtrl.$inject = [
        "$scope",
        "$location",
        "$http"
    ];

    function managementAdmCtrl($scope, $location, $http) {
        $scope.schoolName = selectData.schoolName;
        $scope.teacherShow = false;
        $scope.school = "全部";
        $scope.identity = "教师";
        $scope.count = 10;
        $scope.pageSize = 4;
        $scope.pages = Math.ceil( 20 / $scope.pageSize); //分页数
        $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
        $scope.pageList = [];
        $scope.selPage = 1;
        $scope.checkboxs = [];

        /**
         * 获取登陆账号信息
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

        /**
         * 初次获取教师信息
         */
        $http({
            method: "get",
            url: configData.getDataUrl.getExamineTeacherMessage,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            $scope.count = data.length;
            $scope.allTeacherMessage = data.slice(0, $scope.pageSize);
        }).error(function (data) {
            bootbox.alert("服务器连接失败！");
        });

        //页码分页查询
        $scope.setData = function () {
            if ($scope.identity === "教师") {
                $http({
                    method: "post",
                    url: "http://localhost:8080/OlympicsAPI/rest/TeacherMessage/getTeacherMessageRule",
                    data: {
                        name: $("#teacherSearchName").val(),
                        school: $("#school").val(),
                        examine: "审核通过",
                        start: $("#examineLinageSelect").val() * ($scope.selPage - 1),
                        end: $("#examineLinageSelect").val()
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).success(function (data) {
                    $scope.allTeacherMessage = [];
                    if(data.length === 0) {
                        bootbox.alert("数据不足！");
                    }else {
                        $scope.allTeacherMessage = data;
                    }
                }).error(function (data) {
                    bootbox.alert("服务器连接失败！");
                });
            }else {
                //学生分页查询
                // $http({
                //     method: "post",
                //     url: "http://localhost:8080/OlympicsAPI/rest/StudentMessage/allStudentMessage",
                //     data: {
                //         teacher: "",
                //         name: $("#searchName").val(),
                //         grade: $("#gradeSearch").val(),
                //         start: $("#linageSelect").val() * ($scope.selPage - 1),
                //         end: $("#linageSelect").val()
                //     },
                //     headers: {
                //         'Content-Type': 'application/x-www-form-urlencoded'
                //     }
                // }).success(function (data) {
                //     $scope.allStudentMessage = data;
                //     if(data.length === 0) {
                //         bootbox.alert("数据不足！")
                //     }
                // }).error(function (data) {
                //     bootbox.alert("服务器连接失败！");
                // });
            }
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
         * 复选框选中样式修改
         * @param btn
         */
        $scope.checkbox = function (btn) {
            if ($("#teacher" + btn)[0].checked) {
                $("#teacher" + btn).parent().prevAll().andSelf().css("background-color", "#dff0d8");
            }else {
                $("#teacher" + btn).parent().prevAll().andSelf().css("background-color", "#f9f9f9");
            }
            $scope.checkboxs.push(btn);
        };

        /**
         * 身份选择
         */
        $scope.identityChange = function () {
            $scope.teacherShow = !$scope.teacherShow;
            $scope.studentShow = !$scope.studentShow;
        };

        /**
         * 显示条数修改按钮
         */
        $scope.changePage = function () {
            if ($scope.identity === "教师") {
                $http({
                    method: "post",
                    url: "http://localhost:8080/OlympicsAPI/rest/TeacherMessage/getTeacherMessageRule",
                    data: {
                        name: $("#examineSearchName").val(),
                        examine: "审核通过",
                        start: $("#teacherLinageSelect").val() * ($scope.selPage - 1),
                        end: $("#teacherLinageSelect").val()
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).success(function (data) {
                    if(data.length === 0) {
                        $scope.allTeacherMessage = [];
                        bootbox.alert("数据不足！");
                    }else {
                        $scope.allTeacherMessage = data;
                    }
                }).error(function (data) {
                    bootbox.alert("服务器连接失败！");
                });
            }else {
                //学生分页查询
                // $http({
                //     method: "post",
                //     url: "http://localhost:8080/OlympicsAPI/rest/StudentMessage/allStudentMessage",
                //     data: {
                //         teacher: "",
                //         name: $("#searchName").val(),
                //         grade: $("#gradeSearch").val(),
                //         start: $("#linageSelect").val() * ($scope.selPage - 1),
                //         end: $("#linageSelect").val()
                //     },
                //     headers: {
                //         'Content-Type': 'application/x-www-form-urlencoded'
                //     }
                // }).success(function (data) {
                //     $scope.allStudentMessage = data;
                //     if(data.length === 0) {
                //         bootbox.alert("数据不足！")
                //     }
                // }).error(function (data) {
                //     bootbox.alert("服务器连接失败！");
                // });
            }
        };

        /**
         * 重置密码
         */
        $scope.resetPasswordButton = function () {
            if ($scope.identity === "教师") {
                if (0 === $scope.checkboxs.length) {
                    bootbox.alert("请选择要操作的对象！");
                } else {
                    $http({
                        method: "post",
                        url: "http://localhost:8080/OlympicsAPI/rest/TeacherMessage/teacherPasswordChange",
                        data: {
                            studentNum: $scope.checkboxs,
                            username: ""
                        },
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }).success(function (data) {
                        if (data == "success") {
                            $scope.checkboxs = [];
                            bootbox.alert("密码已重置为:123456!");
                        }
                    }).error(function (data) {
                        bootbox.alert("服务器连接失败！");
                    });
                }
            }else {

            }
        };

        /**
         * 删除选手
         */
        $scope.deleteButton = function () {
            if (0 === $scope.checkboxs.length) {
                bootbox.alert("请选择要操作的对象！");
            } else {
                $http({
                    method: "post",
                    url: "http://localhost:8080/OlympicsAPI/rest/StudentMessage/deleteStudentMessage",
                    data: {
                        studentNum: $scope.checkboxs
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).success(function (data) {
                    if (data == "success") {
                        $scope.checkboxs = [];
                        bootbox.alert("选手已删除，请刷新！");
                    }
                }).error(function (data) {
                    bootbox.alert("服务器连接失败！");
                });
            }
        };
    }
}());