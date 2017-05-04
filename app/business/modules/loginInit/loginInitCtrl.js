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

        $scope.loginInitChoice = false;
        $scope.teacherRegisterView = true;
        $scope.studentRegisterView = true;

        $scope.sex = selectData.sex;
        $scope.schoolName = selectData.schoolName;
        $scope.grade = selectData.grade;
        $scope.language = selectData.language;
        $scope.entryType = selectData.entryType;

        $scope.form = {
            username : "",
            password : "",
            name : "",
            peopleId: "",
            teacherName : ""
        };

        $scope.submit = function () {
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
         * 返回按钮绑定事件
         */
        $scope.loginBack = function () {
            location.hash = "login";
        };
        
        $scope.teacherRegister = function () {

        };
        
        $scope.studentRegister = function () {
            $scope.loginInitChoice = true;
            $scope.studentRegisterView = false;
        }
    }
}());