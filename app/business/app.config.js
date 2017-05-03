var globalUrl = globalUrl.api;
var configData = {
    getDataUrl: {
        title: globalUrl + "UserInfoService/title/",
        document: globalUrl + "UserInfoService/document/"
    },
    nav: [
        {
            name: "首页",
            parent: "",
            url: "/home",
            route: {
                templateUrl: "./business/modules/home/home.html",
                controller: "homeCtrl",
                controllerAs: "vm"
            },
            isMenu: true
        },
        {
            name: "关于NOI",
            parent: "",
            url: "/about",
            route: {
                templateUrl: "./business/modules/about/about.html",
                controller: "aboutCtrl",
                controllerAs: "vm"
            },
            isMenu: true,
            list:[
                {
                    name: "简介"
                },
                {
                    name: "条例条规",
                    parent: "",
                    url: "/titleLists",
                    route: {
                        templateUrl: "./business/modules/titleLists/titleLists.html",
                        controller: "titleListsCtrl",
                        controllerAs: "vm"
                    }
                },
                {
                    name: "组织机构"
                },
                {
                    name: "出版物"
                },
                {
                    name: "参赛学校"
                }
            ]
        },
        {
            name: "新闻",
            list: [
                {
                    name: "动态"
                },
                {
                    name: "学生活动"
                },
                {
                    name: "获奖名单"
                },
                {
                    name: "交流与分享"
                }
            ]
        },
        {
            name: "历年资料",
            list: [
                {
                    name: "历届举办情况"
                },
                {
                    name: "历届试题",
                    list: [
                        {
                            name: "全国竞赛（NOI）"
                        },
                        {
                            name: "全国联赛（NOIP）"
                        },
                        {
                            name: "冬令营"
                        },
                        {
                            name: "亚太奥赛（APOI）"
                        },
                        {
                            name: "国家队选拔赛（CTSC）"
                        }
                    ]
                }
            ]
        },
        {
            name: "教师培训"
        },
        {
            name: "在线题库"
        },
        {
            name: "论坛"
        }
    ],
    indexContentRight: [
        {
            title: "NOI报名系统",
            list:[
                {
                    name: "NOIP2016复赛报名",
                    url: "/login.html#/login",
                    redirect: true
                },
                {
                    name: "NOI题库",
                    redirect: true
                }
            ]
        },
        {
            "title": "技术规则",
            list: [
                {
                    name: "NOI系列活动标准竞赛环境(2016年11月08日更新)"
                },
                {
                    name: "NOI linux系统及安装文档下载(2016年10月8日更新)"
                },
                {
                    name: "GUIDE 1.0.1正式版发布"
                }
            ]
        },
        {
            title: "相关链接",
            list: [
                {
                    name: "中国计算机学会"
                },
                {
                    name: "IOI官方网站"
                },
                {
                    name: "IOI秘书处"
                },
                {
                    name: "IOI2014"
                }
            ]
        },
        {
            title: "联系方式",
            list: [
                {
                    name: "NOI各省特派员联系方式 "
                },
                {
                    name: "NOI竞赛办公室 "
                },
                {
                    name: "NOI技术解答：",
                    content: "此邮箱仅负责解答NOI的技术问题，非技术问题请联系",
                    alink: "NOI竞赛办公室。"
                }
            ]
        }
    ],
    login: [
        {
            name:"登录页",
            url: "/login",
            route: {
                templateUrl: "./business/modules/login/login.html",
                controller: "loginCtrl",
                controllerAs: "vm"
            }
        },
        {
            name:"用户注册",
            url: "/loginInit",
            route: {
                templateUrl: "./business/modules/loginInit/loginInit.html",
                controller: "loginInitCtrl",
                controllerAs: "vm"
            }
        }
    ]
};

var schoolName = [
    "安徽省第一中学",
    "安徽省第二中学",
    "安徽省第三中学",
    "安徽省第四中学",
    "安徽省实验高学"
];
