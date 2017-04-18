(function () {
    angular
        .module("app")
        .service("getAboutData", getAboutData)

    getAboutData.$inject = [
        "$scope", 
        "$http"
    ];
    
    function getAboutData() {
        var getAboutData = {};
        $.ajax({
            type: 'GET',
            async:false,
            url: 'http://localhost:8080/OlympicsAPI/rest/UserInfoService/aboutTitle',
            dataType: "jsonp",
            contentType: "application/x-www-form-urlencoded",
            jsonp: "callback",//服务端用于接收callback调用的function名的参数
            cache : false,
            error:function(){alert('系统连接失败，请稍后再试！')},
            success: function(obj){
                getAboutData = obj;
            }
        });
        return getAboutData;
    }
}());