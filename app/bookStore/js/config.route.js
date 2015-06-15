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
});