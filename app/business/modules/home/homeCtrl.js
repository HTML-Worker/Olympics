(function () {
    angular
        .module("app")
        .controller("homeCtrl", homeCtrl);

    homeCtrl.$inject = [
        "$scope"
    ];

    /**
     * 首页模块控制器
     */
    function homeCtrl($scope) {
        //alert($scope.aboutData);
    }
}());



