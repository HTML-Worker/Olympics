(function () {

    angular
        .module("app")
        .config(config);

    config.$inject = [
        "$httpProvider",
        "$routeProvider"
    ];

    function config($httpProvider,
                    $routeProvider) {

        setNav();

        /**
         * 加载路由跳转
         */
        function setNav() {
            var navData = configData.nav;
            for (var i = 0; i < navData.length; i++) {
                if (navData[i].url !== "") {
                    $routeProvider.when(navData[i].url, navData[i].route);
                }
            }
            $routeProvider.when("/document/:about*", {
                templateUrl: "./business/modules/document/document.html",
                controller: "documentCtrl",
                controllerAs: "vm"
            });
            // $routeProvider.otherwise({
            //     redirectTo: navData[0].url
            // });
        }
    }
}());
