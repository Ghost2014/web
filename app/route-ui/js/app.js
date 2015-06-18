/**
 * Created by ghost on 2015/6/18.
 */
var app = angular.module('app',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        //一级导航
        .state('home',{
            url:'/home',
            templateUrl:'tpls/home.html'
        })
        .state('html', {
            url: "/html",
            templateUrl: "tpls/layout.html",
            controller:'html'
        })
        .state('js', {
            url: "/js",
            templateUrl: "tpls/layout.html",
            controller:'javascript'
        })
        .state('php', {
            url: "/php",
            templateUrl: "tpls/layout.html",
            controller:'php'
        })
        .state('mysql', {
            url: "/mysql",
            templateUrl: "tpls/layout.html",
            controller:'mysql'
        })
        .state('java', {
            url: "/java",
            templateUrl: "tpls/layout.html",
            controller:'java'
        })
        //二级导航
        .state("html.0",{
            url:"/0",
            templateUrl:"tpls/detail.html",
            controller:'abc'
        })
});
