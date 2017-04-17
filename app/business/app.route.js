(function () {

    angular
        .module("app")
        .config(config);

    config.$inject = ['$httpProvider',
        '$routeProvider'];

    function config($httpProvider,
                    $routeProvider) {
        /**
         * 处理http请求验证token信息的工厂方法
         */
        /*$httpProvider.interceptors.push('httpInterceptor');*/
        setNav();

        //在程序一开始获取到导航栏数据
        function setNav() {
            var navData = configData.nav;
            for (var i = 0; i < navData.length; i++) {
                if (navData[i].url !== "") {
                    $routeProvider.when(navData[i].url, navData[i].route);
                }
            }
            $routeProvider.otherwise({
                redirectTo: navData[0].url
            });
        }
    }
}());
