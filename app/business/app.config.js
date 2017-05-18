var globalUrl = globalUrl.api;
var configData = {
    getDataUrl: {
        title: globalUrl + "UserInfoService/title/",
        document: globalUrl + "UserInfoService/document/",
        newsNotes:  globalUrl + "UserInfoService/newsNotes/",
        loginIned: globalUrl + "LandMessage/loginIned",
        studentLoginMessage: globalUrl + "StudentMessage/studentMessage/",
        teacherLoginMessage: globalUrl + "TeacherMessage/teacherMessage/",
        adminMessage: globalUrl + "AdminMessage/adminMessage/",
        adminPEChange: globalUrl + "AdminMessage/adminPEChange",
        allTeacherMessage: globalUrl + "TeacherMessage/allTeacherMessage",
        teacherExamine: globalUrl + "TeacherMessage/teacherExamine"
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
            }
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
            list:[
                {
                    name: "简介",
                    url:"document/other_document/5",
                    route: {
                        templateUrl: "./business/modules/document/document.html",
                        controller: "documentCtrl",
                        controllerAs: "vm"
                    }
                },
                {
                    name: "条例条规",
                    parent: "",
                    url: "/titleLists/rules",
                    route: {
                        templateUrl: "./business/modules/titleLists/titleLists.html",
                        controller: "titleListsCtrl",
                        controllerAs: "vm"
                    }
                },
                {
                    name: "组织机构",
                    url:"document/other_document/6",
                    route: {
                        templateUrl: "./business/modules/document/document.html",
                        controller: "documentCtrl",
                        controllerAs: "vm"
                    }
                },
                {
                    name: "出版物",
                    url:"document/other_document/8",
                    route: {
                        templateUrl: "./business/modules/document/document.html",
                        controller: "documentCtrl",
                        controllerAs: "vm"
                    }
                },
                {
                    name: "参赛学校",
                    url:"document/other_document/7",
                    route: {
                        templateUrl: "./business/modules/document/document.html",
                        controller: "documentCtrl",
                        controllerAs: "vm"
                    }
                }
            ]
        },
        {
            name: "新闻",
            url:"document/other_document/9",
            route: {
                templateUrl: "./business/modules/document/document.html",
                controller: "documentCtrl",
                controllerAs: "vm"
            },
            list: [
                {
                    name: "动态",
                    parent: "",
                    url: "/titleLists/dynamic",
                    route: {
                        templateUrl: "./business/modules/titleLists/titleLists.html",
                        controller: "titleListsCtrl",
                        controllerAs: "vm"
                    }
                },
                {
                    name: "学生活动",
                    parent: "",
                    url: "/titleLists/student_activity",
                    route: {
                        templateUrl: "./business/modules/titleLists/titleLists.html",
                        controller: "titleListsCtrl",
                        controllerAs: "vm"
                    }
                },
                {
                    name: "获奖名单",
                    parent: "",
                    url: "/titleLists/winners",
                    route: {
                        templateUrl: "./business/modules/titleLists/titleLists.html",
                        controller: "titleListsCtrl",
                        controllerAs: "vm"
                    }
                },
                {
                    name: "交流与分享",
                    parent: "",
                    url: "/titleLists/talk_and_sharing",
                    route: {
                        templateUrl: "./business/modules/titleLists/titleLists.html",
                        controller: "titleListsCtrl",
                        controllerAs: "vm"
                    }
                }
            ]
        },
        {
            name: "历年资料",
            url:"document/other_document/10",
            route: {
                templateUrl: "./business/modules/document/document.html",
                controller: "documentCtrl",
                controllerAs: "vm"
            },
            list: [
                {
                    name: "历届举办情况"
                },
                {
                    name: "历届试题",
                    url:"document/other_document/4",
                    route: {
                        templateUrl: "./business/modules/document/document.html",
                        controller: "documentCtrl",
                        controllerAs: "vm"
                    }
                    // list: [
                    //     {
                    //         name: "全国竞赛（NOI）"
                    //     },
                    //     {
                    //         name: "全国联赛（NOIP）"
                    //     },
                    //     {
                    //         name: "冬令营"
                    //     },
                    //     {
                    //         name: "亚太奥赛（APOI）"
                    //     },
                    //     {
                    //         name: "国家队选拔赛（CTSC）"
                    //     }
                    // ]
                }
            ]
        },
        {
            name: "教师培训",
            parent: "",
            url: "/titleLists/teacher_training",
            route: {
                templateUrl: "./business/modules/titleLists/titleLists.html",
                controller: "titleListsCtrl",
                controllerAs: "vm"
            }
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
                    redirect: false
                },
                {
                    name: "NOI题库",
                    url:"http://oj.noi.cn/oj/#main/home",
                    redirect: true
                }
            ]
        },
        {
            "title": "技术规则",
            list: [
                {
                    name: "NOI系列活动标准竞赛环境(2016年11月08日更新)",
                    url:"document/other_document/3"
                },
                {
                    name: "NOI linux系统及安装文档下载(2016年10月8日更新)",
                    url:"document/other_document/2"
                },
                {
                    name: "GUIDE 1.0.1正式版发布",
                    url:"document/other_document/1"
                }
            ]
        },
        {
            title: "相关链接",
            list: [
                {
                    name: "中国计算机学会",
                    url:"http://www.ccf.org.cn/",
                    redirect: true
                },
                {
                    name: "IOI官方网站",
                    url:"http://www.ioinformatics.org/index.shtml",
                    redirect: true
                },
                {
                    name: "IOI秘书处",
                    url:"http://olympiads.win.tue.nl/ioi/",
                    redirect: true
                },
                {
                    name: "IOI2014",
                    url:"http://www.ioi2014.org/",
                    redirect: true
                }
            ]
        },
        {
            title: "联系方式",
            list: [
                // {
                //     name: "NOI各省特派员联系方式 "
                // },
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
        },
        {
            name:"学生管理页面",
            url: "/manage/studentView",
            route: {
                templateUrl: "./business/modules/manage/studentView/studentView.html",
                controller: "studentViewCtrl",
                controllerAs: "vm"
            }
        },
        {
            name:"教师管理页面",
            url: "/manage/teacherView",
            route: {
                templateUrl: "./business/modules/manage/teacherView/teacherView.html",
                controller: "teacherViewCtrl",
                controllerAs: "vm"
            }
        },
        {
            name:"特派员管理页面",
            url: "/manage/adminView",
            route: {
                templateUrl: "./business/modules/manage/adminView/adminView.html",
                controller: "adminViewCtrl",
                controllerAs: "vm"
            }
        }
    ]
};

var selectData = {
    sex: [
        "男",
        "女"
    ],
    schoolName: [
        "合肥市第二中学",
        "合肥市第三中学",
        "合肥市第五中学",
        "合肥市第六中学",
        "合肥市第七中学",
        "合肥市第八中学",
        "合肥市第九中学",
        "合肥市第十中学",
        "合肥一六八中学",
        "合肥市第三十二中学",
        "合肥市庐阳高级中学",
        "合肥市第十一中学",
        "合肥工业大学",
        "肥东第一中学",
        "肥东县第二中学",
        "肥西中学",
        "肥西农兴中学",
        "长丰县第一中学",
        "庐江中学",
        "庐江第二中学",
        "庐江金牛中学",
        "庐江汤池中学",
        "巢湖市第一中学",
        "巢湖市第二中学",
        "巢湖市第四中学",
        "巢湖市烔炀中学",
        "巢湖市槐林中学",
        "淮北市第一中学",
        "淮北市实验高级中学",
        " 淮北市第十二中学",
        "淮北师范大学",
        "濉溪中学",
        "濉溪县第二中学",
        "濉溪县孙疃中学",
        "濉溪县临涣中学",
        "亳州市第一中学",
        "亳州市第二完全中学",
        "涡阳第一中学",
        "涡阳县第二中学",
        "涡阳第四中学",
        "蒙城第一中学",
        "利辛县第一中学",
        "利辛高级中学",
        "宿城第一中学",
        "宿州市第二中学",
        "砀山中学",
        "砀山第二中学",
        "萧县中学",
        "萧城一中",
        "灵璧县第一中学",
        "灵璧中学",
        "泗县第一中学",
        "泗县第二中学",
        "蚌埠第二中学",
        "蚌埠第一中学",
        "蚌埠第三中学",
        "蚌埠铁路中学",
        "蚌埠第四中学",
        "怀远县第一中学",
        "怀远县第二中学",
        "怀远县第三中学",
        "五河县第一中学",
        "固镇县第一中学",
        "固镇县第二中学",
        "阜阳第一中学",
        "阜阳市第三中学",
        "阜阳市第五中学",
        "阜阳市红旗中学",
        "阜阳市第二中学",
        "阜阳市城郊中学",
        "界首第一中学",
        "界首中学",
        "太和中学",
        "太和第一中学",
        "临泉第一中学",
        "临泉第二中学",
        "临泉实验中学",
        "阜南一中",
        "阜南实验中学",
        "颍上第一中学",
        "淮南第一中学",
        "淮南第二中学",
        "淮南第三中学",
        "淮南第四中学",
        "淮南第五中学",
        "凤台县第一中学",
        "寿县第一中学",
        "寿县安丰高级中学",
        "滁州中学",
        "滁州市实验中学",
        "滁州市第二中学",
        "来安中学",
        "全椒中学",
        "全椒县慈济中学",
        "天长中学",
        "天长市炳辉中学",
        "天长市铜城中学",
        "定远中学",
        "定远县第三中学",
        "凤阳中学",
        "六安第一中学",
        "六安第二中学",
        "六安市毛坦厂中学",
        "六安市新安中学",
        "六安市城南中学",
        "霍邱县第一中学",
        "霍邱县第二中学",
        "霍山中学",
        "金寨第一中学",
        "金寨县南溪中学",
        "金寨县青山中学",
        "舒城中学",
        "舒城第一中学",
        "舒城县千人桥中学",
        "马鞍山市第二中学",
        "马鞍山市红星中学",
        "安徽工业大学",
        "马鞍山市第二十二中学",
        "含山中学",
        "含山县第二中学",
        "和县第一中学",
        "和县第二中学",
        "当涂第一中学",
        "当涂第二中学",
        "当涂县石桥中学",
        "芜湖市第一中学",
        "安徽师范大学",
        "芜湖市第十二中学",
        "芜湖市田家炳实验中学",
        "无为第二中学",
        "无为襄安中学",
        "无为第一中学",
        "无为中学",
        "芜湖县第一中学",
        "繁昌县第一中学",
        "繁昌县第二中学",
        "南陵中学",
        "宣城中学",
        "宣城市第二中学",
        "宣城市宣州水阳高级中学",
        "郎溪中学",
        "泾县中学",
        "绩溪中学",
        "旌德中学",
        "宁国中学",
        "铜陵市第一中学",
        "铜陵市第三中学",
        "铜陵中学",
        "枞阳县浮山中学",
        "枞阳中学",
        "枞阳县会宫中学",
        "池州市第一中学",
        "池州市第八中学",
        "池州市第六中学",
        "东至县第二中学",
        "东至县第三中学",
        "石台中学",
        "青阳中学",
        "安庆市第一中学",
        "安庆市第二中学",
        "安庆市第七中学",
        "安庆市田家炳中学",
        "安庆市石化第一中学",
        "安庆市第九中学",
        "怀宁中学",
        "怀宁县新安中学",
        "怀宁县高河中学",
        "潜山野寨中学",
        "潜山中学",
        "潜山县黄铺中学",
        "潜山县第二中学",
        "太湖中学",
        "太湖县第二中学",
        "太湖县弥陀中学",
        "望江县第二中学",
        "望江中学",
        "岳西中学",
        "岳西县汤池中学",
        "桐城中学",
        "桐城市天城高级中学",
        "桐城市第八中学",
        "黄山市屯溪第一中学",
        "黄山市黄山第一中学",
        "歙县中学",
        "歙县第二中学",
        "休宁中学",
        "黟县中学",
        "祁门县第一中学",
        "广德中学",
        "宿松县程集中学",
        "宿松中学"
    ],
    grade: [
        "初一",
        "初二",
        "初三",
        "高一",
        "高二",
        "高三"
    ],
    language: [
        "C",
        "C#",
        "Python",
        "Pascal",
        "C++"
    ],
    entryType: [
        "正式",
        "个人"
    ]
};
