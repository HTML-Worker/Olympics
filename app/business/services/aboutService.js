(function () {
    angular
        .module("app")
        .service("aboutService", aboutService);

    aboutService.$inject = [
        "$http"
    ];
    
    function aboutService($http) {
        var aboutService = {};
        aboutService.getAboutData = function () {
            var aboutData;
            $.ajax({
                async:false,
                type: 'GET',
                url: 'http://localhost:8080/OlympicsAPI/rest/UserInfoService/aboutTitle',
                dataType: "jsonp",
                contentType: "application/x-www-form-urlencoded",
                jsonp: "callback",//服务端用于接收callback调用的function名的参数
                error:function(){alert('系统连接失败，请稍后再试！')},
                success: function(obj){
                    aboutData = obj;
                    alert(aboutData + "+1");
                }
            });
            alert(aboutData + "+2");
        };
        return aboutService;
    }
}());