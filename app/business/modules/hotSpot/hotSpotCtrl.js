(function () {
    angular
        .module("app")
        .controller("hotSpotCtrl", hotSpotCtrl);

    hotSpotCtrl.$inject = [
        "$scope",
        "$http"
    ];

    function hotSpotCtrl($scope, $http) {
        /**
         * 获取热点推荐动态数据
         */
        $http({
            method: "get",
            url: configData.getDataUrl.title + "dynamic" + "/0" + "/7",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            $scope.dynamic = data;
        }).error(function (data) {
            alert("error");
        });

        /**
         * 获取热点推荐学生动态数据
         */
        $http({
            method: "get",
            url: configData.getDataUrl.title + "student_activity" + "/0" + "/7",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            $scope.studentActivity = data;
        }).error(function (data) {
            alert("error");
        });

        /**
         * 获取热点推荐获取名单数据
         */
        $http({
            method: "get",
            url: configData.getDataUrl.title + "winners" + "/0" + "/7",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            $scope.winners = data;
        }).error(function (data) {
            alert("error");
        });

        /**
         * 获取热点推荐教师培训数据
         */
        $http({
            method: "get",
            url: configData.getDataUrl.title + "teacher_training" + "/0" + "/7",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            $scope.teacherraining = data;
        }).error(function (data) {
            alert("error");
        });

        /**
         * 获取热点推荐交流与分享数据
         */
        $http({
            method: "get",
            url: configData.getDataUrl.title + "talk_and_sharing" + "/0" + "/7",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            $scope.talkSharing = data;
        }).error(function (data) {
            alert("error");
        });

        /**
         * 获取热点推荐条例条规数据
         */
        $http({
            method: "get",
            url: configData.getDataUrl.title + "rules" + "/0" + "/7",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            $scope.rules = data;
        }).error(function (data) {
            alert("error");
        });
    }
}());