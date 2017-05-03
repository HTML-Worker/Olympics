(function () {
    angular
        .module("app")
        .controller("loginInitCtrl", loginInitCtrl);

    loginInitCtrl.$inject = [
        "$scope",
        "$location"
    ];

    function loginInitCtrl($scope, $location) {

        $scope.loginInitChoice = true;
        $scope.teacherRegisterView = false;
        $scope.studentRegisterView = false;

        $scope.schoolName = schoolName;

        $scope.form = {
            username : "",
            password : ""
        };

        $scope.submit = function () {
            alert($("#sex").val());
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

        }
    }
}());