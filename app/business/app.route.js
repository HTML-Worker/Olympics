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
            var loginData = configData.login;
            for (var i = 0; i < navData.length; i++) {
                if (navData[i].url !== "") {
                    $routeProvider.when(navData[i].url, navData[i].route);
                    if (navData[i].list) {
                        for(var n = 0; n < navData[i].list.length; n++) {
                            if (navData[i].list[n].url !== "") {
                                $routeProvider.when(navData[i].list[n].url, navData[i].list[n].route);
                                if (navData[i].list[n].list) {
                                    for(var m = 0; m < navData[i].list[n].list.length; m++) {
                                        if (navData[i].list[n].list[m].url !== "") {
                                            $routeProvider.when(navData[i].list[n].list[m].url, navData[i].list[n].list[m].route);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for (var j = 0; j < loginData.length; j++) {
                if (loginData[j].url !== "") {
                    $routeProvider.when(loginData[j].url, loginData[j].route);
                }
            }
            $routeProvider.when("/document/:about*", {
                templateUrl: "./business/modules/document/document.html",
                controller: "documentCtrl",
                controllerAs: "vm"
            });
            // $routeProvider.when("/document/:dynamic*", {
            //     templateUrl: "./business/modules/document/document.html",
            //     controller: "documentCtrl",
            //     controllerAs: "vm"
            // });
            // $routeProvider.otherwise({
            //     redirectTo: navData[0].url
            // });
        }
    }
}());
