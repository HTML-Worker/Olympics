(function () {
    angular
        .module("app")
        .controller("aboutCtrl", aboutCtrl);

    aboutCtrl.$inject = [
        "$scope",
        "$http",
        "aboutService"
    ];

    /**
     * 获取关于页面的数据
     */
    function aboutCtrl($scope, $http, aboutService) {
        $scope.aboutData = aboutService.getAboutData();
        alert($scope.aboutData);
    }
}());