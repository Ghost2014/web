/**
 * Created by ghost on 2015/6/13.
 */
'use strict';
var app = angular.module('app',['ui.router','ngAnimate']);
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index',{
        url:'/index',
        controller:'init',
        templateUrl:'tpls/init.html'
    })
        .state('wxmz',{
            url:'/wxmz_list',
            controller:'wxmz_list',
            templateUrl:'tpls/booklist.html'
        })
        .state('wlxs',{
            url:'/wlxs_list',
            controller:'wlxs_list',
            templateUrl:'tpls/booklist.html'
        })

    //·ÖÀà
        .state('wxmz.guowai',{
            url:'/guowai',
            controller:'guowai',
            templateUrl:'tpls/bookdetails.html'
        })
        .state('wxmz.guwen',{
            url:'/guwen',
            controller:'guwen',
            templateUrl:'tpls/bookdetails.html'
        })
        .state('wxmz.xiandai',{
            url:'/xiandai',
            controller:'xiandai',
            templateUrl:'tpls/bookdetails.html'
        })
        .state('wlxs.wangyou',{
            url:'/wangyou',
            controller:'wangyou',
            templateUrl:'tpls/bookdetails.html'
        })
        .state('wlxs.xuanyi',{
            url:'/xuanyi',
            controller:'xuanyi',
            templateUrl:'tpls/bookdetails.html'
        })
        .state('wlxs.love',{
            url:'/love',
            controller:'love',
            templateUrl:'tpls/bookdetails.html'
        })
});