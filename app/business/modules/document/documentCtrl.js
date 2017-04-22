(function () {
    angular
        .module("app")
        .controller("documentCtrl", documentCtrl);

    documentCtrl.$inject = [
        "$http",
        "$routeProvider"
    ];

    function documentCtrl($http, $routeProvider) {
        alert("文章路由");
    }
}());