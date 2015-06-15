/**
 * Created by ghost on 2015/6/13.
 */
app.controller('init',['$scope',function($scope){
    $scope.info = "欢迎访问在线图书馆";
}]);

//文学名著
app.controller('wxmz_list',['$scope', function ($scope) {
    $scope.aside = [
        {id:101,name:'国外名著',href:'wxmz.guowai'},
        {id:102,name:'古文名著',href:'wxmz.guwen'},
        {id:103,name:'现代名著',href:'wxmz.xiandai'},
    ]
}]);

//名著分类
app.controller('guowai',['$scope', function ($scope) {
    $scope.type = 'guowai';
    $scope.book = [
        {id:101,name:'1',src:'img/wxmz/1.jpg'},
        {id:102,name:'1',src:'img/wxmz/2.jpg'},
        {id:103,name:'1',src:'img/wxmz/3.jpg'},
        {id:104,name:'1',src:'img/wxmz/4.jpg'},
    ]
}]);

app.controller('guwen',['$scope', function ($scope) {
    $scope.type = 'guwen';
    $scope.book = [
        {id:101,name:'1',src:'img/wxmz/5.jpg'},
        {id:102,name:'1',src:'img/wxmz/6.jpg'},
        {id:103,name:'1',src:'img/wxmz/7.jpg'},
    ]
}]);

app.controller('xiandai',['$scope', function ($scope) {
    $scope.type = 'xiandai';
    $scope.book = [
        {id:101,name:'1',src:'img/wxmz/8.jpg'},
        {id:102,name:'1',src:'img/wxmz/9.jpg'},
        {id:103,name:'1',src:'img/wxmz/10.jpg'},
    ]
}]);

//网络小说
app.controller('wlxs_list',['$scope', function ($scope) {
    $scope.aside = [
        {id:101,name:'玄幻网游',href:'wlxs.wangyou'},
        {id:102,name:'悬疑推理',href:'wlxs.xuanyi'},
        {id:103,name:'校园爱情',href:'wlxs.love'},
    ]
}])

app.controller('wangyou',['$scope', function ($scope) {
    $scope.type = 'wangyou';
    $scope.book = [
        {id:101,name:'1',src:'img/wlxs/8.jpg'},
        {id:102,name:'1',src:'img/wlxs/9.jpg'},
        {id:103,name:'1',src:'img/wlxs/10.jpg'},
    ]
}]);
app.controller('xuanyi',['$scope', function ($scope) {
    $scope.type = 'xuanyi';
    $scope.book = [
        {id:101,name:'1',src:'img/wlxs/7.jpg'},
        {id:102,name:'1',src:'img/wlxs/6.jpg'},
        {id:103,name:'1',src:'img/wlxs/5.jpg'},
    ]
}]);
app.controller('love',['$scope', function ($scope) {
    $scope.type = 'love';
    $scope.book = [
        {id:101,name:'1',src:'img/wlxs/4.jpg'},
        {id:102,name:'1',src:'img/wlxs/3.jpg'},
        {id:103,name:'1',src:'img/wlxs/2.jpg'},
        {id:104,name:'1',src:'img/wlxs/1.jpg'},
    ]
}]);