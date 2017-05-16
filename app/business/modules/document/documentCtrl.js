(function () {
    angular
        .module("app")
        .controller("documentCtrl", documentCtrl);

    documentCtrl.$inject = [
        "$scope",
        "$http",
        "$routeParams",
        "$sce",
        "$window"
    ];

    function documentCtrl($scope, $http, $routeParams, $sce, $window) {
        var getUrl = $routeParams.about;
        $http({
            method: "get",
            url: configData.getDataUrl.document + getUrl,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            $scope.document = data[0];
            $scope.document.content = $sce.trustAsHtml($scope.document.content);
        }).error(function (data) {
            alert("error");
        });

        /**
         * 打印功能
         */
        $scope.documentPrint = function () {
            var oPop = window.open('','oPop');
            var str = '<!DOCTYPE html>';
            str +='<html>';
            str +='<head>';
            str +='<meta charset="utf-8">';
            str +='<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">';
            str+='<style>';
            str+='#oDiv2 div{width: 1000px;}';
            str+='.title{font-size: 24px;font-weight: 500;text-align: center;}';
            str+='</style>';
            str +='</head>';
            str +='<body>';
            str +="<div id='oDiv2'>";
            str +="<div class='title'>" + $scope.document.title + "</div>";
            str +="<div>" + $scope.document.content + "</div>";
            str +="</div>";
            str +='</body>';
            str +='</html>';

            oPop.document.write(str);
            oPop.print();
            oPop.close();
        }
    }
}());