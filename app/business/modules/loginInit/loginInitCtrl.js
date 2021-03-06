(function () {
    angular
        .module("app")
        .controller("loginInitCtrl", loginInitCtrl);

    loginInitCtrl.$inject = [
        "$scope",
        "$location",
        "$http"
    ];

    function loginInitCtrl($scope, $location, $http) {
        $scope.username = "";
        $scope.password = "";

        $scope.loginInitChoice = false;
        $scope.teacherRegisterView = true;
        $scope.studentRegisterView = true;
        $scope.titleName = "用户注册";
        $scope.teacherForm = {};

        $scope.sex = selectData.sex;
        $scope.schoolName = selectData.schoolName;
        $scope.grade = selectData.grade;
        $scope.language = selectData.language;
        $scope.entryType = selectData.entryType;

        /**
         * 学生注册信息提交
         */
        $scope.studentSubmit = function () {
            $http({
                method: "post",
                url: "http://localhost:8080/OlympicsAPI/rest/StudentMessage/studentMessage",
                data: {
                    id:"",
                    username: $scope.form.username,
                    password: $scope.form.password,
                    name: $scope.form.name,
                    sex: $("#sex").val(),
                    peopleId: $scope.form.peopleId,
                    phone: $scope.form.phone,
                    email: $scope.form.email,
                    school: $("#school").val(),
                    grade: $("#grade").val(),
                    language: $("#language").val(),
                    teacherName: $scope.form.teacherName,
                    entryType: $("#entryType").val()
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function (data) {
                if ( "200" === data) {
                    bootbox.alert("恭喜，注册成功！");
                }else {
                    bootbox.alert("数据录入失败，请重新输入！");
                }
            }).error(function (data) {
                bootbox.alert("服务器连接失败！");
            });
        };

        /**
         * 教师注册信息提交
         */
        $scope.teacherSubmit = function () {
            $http({
                method: "post",
                url: "http://localhost:8080/OlympicsAPI/rest/TeacherMessage/teacherMessage",
                data: {
                    id:"",
                    username: $scope.teacherForm.username,
                    password: $scope.teacherForm.password,
                    name: $scope.teacherForm.name,
                    sex: $("#teacherSex").val(),
                    peopleId: $scope.teacherForm.peopleId,
                    phone: $scope.teacherForm.phone,
                    email: $scope.teacherForm.email,
                    school: $scope.teacherForm.school,
                    address: $scope.teacherForm.address,
                    zipCode: $scope.teacherForm.zipCode
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function (data) {
                if ( "200" === data) {
                    bootbox.alert("恭喜，注册成功！");
                }else {
                    bootbox.alert("数据录入失败，请重新输入！");
                }
            }).error(function (data) {
                bootbox.alert("服务器连接失败！");
            });
        };

        /**
         * 返回按钮绑定事件
         */
        $scope.loginBack = function () {
            if (false === $scope.loginInitChoice) {
                location.hash = "login";
            }
            else if (false === $scope.studentRegisterView) {
                $scope.titleName = "用户注册";
                $scope.loginInitChoice = false;
                $scope.studentRegisterView = true;
            }
            else if (false === $scope.teacherRegisterView) {
                $scope.titleName = "用户注册";
                $scope.loginInitChoice = false;
                $scope.teacherRegisterView = true;
            }
        };

        /**
         * 教师注册显示控制
         */
        $scope.teacherRegister = function () {
            $scope.titleName = "教师注册";
            $scope.loginInitChoice = true;
            $scope.teacherRegisterView = false;
        };

        /**
         * 学生注册显示控制
         */
        $scope.studentRegister = function () {
            $scope.titleName = "学生注册";
            $scope.loginInitChoice = true;
            $scope.studentRegisterView = false;
        }

        /**
         * 登陆操作
         */
        $scope.loginSubmit = function () {
            if ("" === $scope.username || "" === $scope.password) {
                bootbox.alert("账号或密码不可为空！");
            } else if ("" === $("#captcha").val()) {
                bootbox.alert("请输入验证码！");
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
                    }else if ("0" === data[0].examine) {
                        bootbox.alert("账号审核中，请耐心等待！");
                    }else if ("2" === data[0].examine) {
                        bootbox.alert("账号审核不通过！");
                    } else {
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

        /**
         * 忘记密码重置提示框
         */
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