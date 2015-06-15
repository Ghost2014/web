'use strict';
/**
 * Config for the router
 */
angular
    .module('app')
    .run(
    [ '$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        } ])
    .config(
    [
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/applogin');
            $stateProvider
                .state('applogin',{
                    url: '/applogin',
                    templateUrl: 'beacon/page/template_login.html',
                    controller: 'globalCtrl',
                    resolve: {
                        deps: [
                            'uiLoad',
                            function (uiLoad) {
                                return uiLoad.load([ 'beacon/controllers/beacon_global.js' ]);
                            }]
                    }
                })
                .state( 'app',{
                    abstract: true,
                    url: '/app',
                    templateUrl: 'beacon/page/template_main.html',
                    controller: 'globalCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(
                                    'ui.select')
                                    .then(
                                    function () {
                                        return $ocLazyLoad
                                            .load(['beacon/controllers/beacon_global.js',
                                                'beacon/service/beacon_service.js',
                                                'beacon/service/beacon_config_service.js' ]);
                                    });
                            } ]
                    }
                })

                /*** 资源管理 ***/
                .state('app.resou',{
                    url: '/resou',
                    templateUrl: 'beacon/page/template_v1.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['beacon/controllers/resouManager.js',
                                        'beacon/service/resou_service.js' ]);
                            } ]
                    }
                })

                // 资源概览
                .state('app.resou.source_overview',{
                    url: '/source_overview',
                    templateUrl: 'beacon/page/resou/app_resou_overview.html',
                    controller: 'resouOverviewCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad',function( $ocLazyLoad ){
                            return $ocLazyLoad.load('ngGrid').then( function(){
                                return $ocLazyLoad.load([
                                    'beacon/demo_data/resou/treetable.js'
                                ]);
                            });
                        }]
                    }
                })
                /*** 资源分组统计图表 ***/
                .state('app.resou.source_charts',{
                    url: '/source_charts/:id',
                    templateUrl: 'beacon/page/resou/barChart.html',
                    controller: 'resouOverviewCharts'
                })
                // 自动发现
                .state('app.resou.autoDiscInfo',{
                    url: '/autoDisc_info',
                    templateUrl: 'beacon/page/resou/app_resou_auto.html',
                    controller: 'resouAutoDiscInfoCtrl'
                })
                // 网络设备 列表
                .state('app.resou.dev_list',{
                    url: '/dev_list',
                    templateUrl: 'beacon/page/resou/app_resou_list2.html',
                    controller: 'resouNetDevListCtrl'
                })
                // 网络设备 详细信息
                .state('app.resou.dev_info',{
                    url: '/dev_info/:id',
                    templateUrl: 'beacon/page/resou/app_resou_info.html',
                    controller: 'resouNetDevInfoCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad',function( $ocLazyLoad ){
                            return $ocLazyLoad.load('ngGrid').then( function(){
                                return $ocLazyLoad.load([
                                    'beacon/controllers/resouManager.js',
                                    'beacon/service/resou_service.js',
                                    'beacon/controllers/netMonitor.js',
                                    'beacon/service/netMonitor_service.js'
                                ]);
                            });
                        }]
                    }
                })
                .state('app.resou.dev_add',{
                    url: '/dev_add',
                    templateUrl: 'beacon/page/resou/app_resou_add.html',
                    controller: 'resouNetDevAddCtrl'
                })
                // 主机 列表
                .state('app.resou.host_list',{
                    url: '/host_list',
                    templateUrl: 'beacon/page/resou/app_resou_list2.html',
                    controller: 'resouHostListCtrl'
                })
                // 主机 详细信息
                .state('app.resou.host_info',{
                    url: '/host_info/:id',
                    templateUrl: 'beacon/page/resou/app_resou_info.html',
                    controller: 'resouHostInfoCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad',function( $ocLazyLoad ){
                            return $ocLazyLoad.load('ngGrid').then( function(){
                                return $ocLazyLoad.load([
                                    'beacon/controllers/resouManager.js',
                                    'beacon/service/resou_service.js',
                                    <!-- 将网络设备所用的controller 和 service添加进来，本模块需要用到其中的对话框-->
                                    'beacon/controllers/netMonitor.js',
                                    'beacon/service/netMonitor_service.js'
                                ]);
                            });
                        }]
                    }
                })
                .state('app.resou.host_add',{
                    url: '/host_add',
                    templateUrl: 'beacon/page/resou/app_resou_add.html',
                    controller: 'resouHostAddCtrl'
                })
                // 数据库 列表
                .state('app.resou.db_list',{
                    url: '/db_list',
                    templateUrl: 'beacon/page/resou/app_resou_list2.html',
                    controller: 'resouDbListCtrl'
                })
                // 数据库 详细信息
                .state('app.resou.db_info',{
                    url: '/db_info/:id',
                    templateUrl: 'beacon/page/resou/app_resou_info.html',
                    controller: 'resouDbInfoCtrl'
                })
                .state('app.resou.db_add',{
                    url: '/db_add',
                    templateUrl: 'beacon/page/resou/app_resou_add.html',
                    controller: 'resouDbAddCtrl'
                })
                // 中间件列表
                .state('app.resou.mware_list',{
                    url: '/mware_list',
                    templateUrl: 'beacon/page/resou/app_resou_list2.html',
                    controller: 'resouMwareListCtrl'
                })
                // 中间件 详细信息
                .state('app.resou.mware_info',{
                    url: '/mware_info/:id',
                    templateUrl: 'beacon/page/resou/app_resou_info.html',
                    controller: 'resouMwareInfoCtrl'
                })
                .state('app.resou.mware_add',{
                    url: '/mware_add',
                    templateUrl: 'beacon/page/resou/app_resou_add.html',
                    controller: 'resouMwareAddCtrl'
                })
                // 资源分组 列表
                .state('app.resou.regroup_list',{
                    url: '/regroup_list',
                    templateUrl: 'beacon/page/resou/app_resou_list.html',
                    controller: 'resouGroupListCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad',function( $ocLazyLoad ){
                            return $ocLazyLoad.load('ngGrid').then( function(){
                                return $ocLazyLoad.load([
                                    'beacon/controllers/resouManager.js',
                                    'beacon/service/resou_service.js',
                                    'beacon/mapcore/basemap.js'
                                ]);
                            });
                        }]
                    }
                })
                // 资源分组 详细
                .state('app.resou.regroup_info',{
                    url: '/regroup_info',
                    templateUrl: 'beacon/page/resou/app_resou_info.html',
                    controller: 'resouGroupInfoCtrl'
                })
                .state('app.resou.regroup_add',{
                    url: '/regroup_add',
                    templateUrl: 'beacon/page/resou/app_resou_add.html',
                    controller: 'resouGroupAddCtrl'
                })
                //同步任务 列表
                .state('app.resou.syntask_list',{
                    url: '/syntask_list',
                    templateUrl: 'beacon/page/resou/app_resou_list2.html',
                    controller: 'resouSyntaskListCtrl'
                })
                // 同步任务 详细信息
                .state('app.resou.syntask_info',{
                    url: '/syntask_info/:id',
                    templateUrl: 'beacon/page/resou/app_resou_info.html',
                    controller: 'resouSyntaskInfoCtrl'
                })
                // 同步任务 新增
                .state('app.resou.syntask_add',{
                    url: '/syntask_add',
                    templateUrl: 'beacon/page/resou/app_resou_add.html',
                    controller: 'resouSyntaskAddCtrl'
                })

                /*** 固定一屏界面，不支持自动扩大模板 ***/
                .state('apps', {
                    abstract: true,
                    url: '/apps',
                    templateUrl: 'beacon/page/template_layout.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load('ui.select')
                                .then(function () {
                                    return $ocLazyLoad
                                        .load(['beacon/controllers/beacon_global.js',
                                            'beacon/service/beacon_service.js',
                                            'beacon/service/beacon_config_service.js' ]);
                                });
                        } ]
                    }
                })
                /*** 网络拓扑监测 ***/
                //.state('apps.topomon',{
                //    url: '/topomon',
                //    templateUrl: 'beacon/page/template_v3.html',
                //    resolve: {
                //        deps: ['$ocLazyLoad',function ($ocLazyLoad) {
                //            return $ocLazyLoad
                //                .load(['beacon/controllers/topoMonitor.js',
                //                    'beacon/service/topoMonitor_service.js',
                //                    'beacon/topo/topo-graph-service_sub.js',
                //                    'beacon/topo/topo-component-extends.js',
                //                    'beacon/topo/isinonet-topo-globalinitparams_sub.js',
                //                    'beacon/topo/isinonet-jcanvas.min.js',
                //                    'beacon/topo/isinonet-fullscreen-0.3.4.js',
                //                    'css/nms/topo/isinonet-topo.css'
                //                ]);
                //        }]
                //    }
                //})
                .state('app.topomon',{
                    url: '/topomon',
                    templateUrl: 'beacon/page/template_v1.html',
                    resolve: {
                        deps: ['$ocLazyLoad',function ($ocLazyLoad) {
                            return $ocLazyLoad
                                .load(['beacon/controllers/topoMonitor.js',
                                    'beacon/service/topoMonitor_service.js',
                                    'beacon/topo/topo-graph-service.js',
                                    'beacon/topo/topo-component-extends.js',
                                    'beacon/topo/isinonet-topo-globalinitparams.js',
                                    'beacon/topo/isinonet-jcanvas.min.js',
                                    'beacon/topo/isinonet-fullscreen-0.3.4.js',
                                    'css/nms/topo/isinonet-topo.css'
                                ]);
                        }]
                    }
                })
                // 骨干网
                .state('app.topomon.backbone',{
                    url: '/backbone',
                    templateUrl: 'beacon/page/topo/template_topo.html',
                    controller: 'topoMonitorBackboneCtrl'
                })
                // GIS
                //.state('app.topomon.gis',{
                //    url: '/gis',
                //    templateUrl: 'beacon/page/topo/template_gis.html',
                //    controller: 'topoMonitorGISCtrl'
                //})
                // GIS
                .state('app.topomon.gis', {
                    url: '/gis',
                    templateUrl: 'beacon/page/topo/template_gis.html',
                    controller: 'topoMonitorGISCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['beacon/mapcore/map.css',
                                'beacon/mapcore/basemap.js']);
                        }]
                    }
                })

                // 子网拓扑
                //.state('app.topomon.subnet',{
                //    url: '/subnet',
                //    templateUrl: 'beacon/page/topo/subnet_topo.html',
                //    controller: 'topoMonitorSubnetCtrl'
                //})

                .state('app.topomon.subnet', {
                    url: '/subnet',
                    templateUrl: 'beacon/page/topo/template_topo_subnet.html',
                    controller: 'topoMonitorSubnetCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad
                                .load(['beacon/directives/topo_directives.js']);
                        }]
                    }
                })

                 //自定义(apps)
                .state('app.topomon.custom',{
                    url: '/custom',
                    templateUrl: 'beacon/page/topo/template_topo_subnet.html',
                    controller: 'topoMonitorCustomCtrl'
                })
                //.state('app.topomon.custom', {
                //    url: '/custom',
                //    templateUrl: 'beacon/page/topo/template_topo_direc.html',
                //    controller: 'topoDirControl',
                //    resolve: {
                //        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                //            return $ocLazyLoad
                //                .load(['beacon/directives/topo_directives.js']);
                //        }]
                //    }
                //})

                /*** 网络监测 ***/
                .state('app.monitor',{
                    url: '/monitor',
                    templateUrl: 'beacon/page/template_v1.html',
                    resolve: {
                        deps: ['$ocLazyLoad',function ($ocLazyLoad) {
                            return $ocLazyLoad
                                .load(['beacon/controllers/netMonitor.js',
                                    'beacon/service/netMonitor_service.js']);
                        }]
                    }
                })
                // 网络性能监测概览
                .state('app.monitor.app_monitor_overview',{
                    url: '/app_monitor_overview',
                    templateUrl: 'beacon/page/monitor/app_monitor_overview.html',
                    controller: 'monitorOverviewCtrl'
                })
                // 网络设备监测列表
                .state('app.monitor.mon_dev_list',{
                    url: '/mon_dev_list',
                    templateUrl: 'beacon/page/monitor/template_monitor_list.html',
                    controller: 'netMonitorNetDevListCtrl'
                })
                // 主机监测列表
                .state('app.monitor.mon_host_list',{
                    url: '/mon_host_list',
                    templateUrl: 'beacon/page/monitor/template_monitor_list.html',
                    controller: 'netMonitorHostListCtrl'
                })
                // 数据库监测列表
                .state('app.monitor.mon_db_list',{
                    url: '/mon_db_list',
                    templateUrl: 'beacon/page/monitor/template_monitor_list.html',
                    controller: 'netMonitorDbListCtrl'
                })
                // 中间件监测列表
                .state('app.monitor.mon_mware_list',{
                    url: '/mon_mware_list',
                    templateUrl: 'beacon/page/monitor/template_monitor_list.html',
                    controller: 'netMonitorMwareListCtrl'
                })
                // 管理性能监测任务列表
                .state('app.monitor.mon_performance',{
                    url: '/mon_performance',
                    templateUrl: 'beacon/page/monitor/template_monitor_list.html',
                    controller: 'monPerformanceListCtrl'
                })
                /*** 应用性能监测 ***/
                .state('app.apply_monitor',{
                    url: '/apply',
                    templateUrl: 'beacon/page/template_v1.html',
                    resolve: {
                        deps: ['$ocLazyLoad',function ($ocLazyLoad) {
                            return $ocLazyLoad
                                .load(['beacon/controllers/applyMonitorController.js',
                                    'beacon/service/applyMonitorService.js',
                                    'vendor/jquery/jvectormap/version2/jquery.vmap.js',
                                    'vendor/jquery/jvectormap/version2/maps/jquery.vmap.world.js',
                                    'vendor/jquery/jvectormap/version2/maps/jquery.vmap.china.js',
                                    'vendor/jquery/jvectormap/version2/jqvmap.css'
                                ])
                        }]
                    }
                })
                // 应用监控概览
                .state('app.apply_monitor.overview',{
                    url: '/overview',
                    //templateUrl: 'beacon/page/apply/template_apply.html',
                    //controller: 'overviewCtrl'
                    templateUrl: 'beacon/page/apply/template_apply.html',
                    controller: 'applyMonitorCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad',function( $ocLazyLoad ){
                            return $ocLazyLoad.load('ngGrid').then( function(){
                                return $ocLazyLoad.load([
                                    'beacon/controllers/applyMonitorController.js',
                                    'beacon/service/applyMonitorService.js'
                                ]);
                            });
                        }]
                    }
                })
                // 应用管理
                .state('app.apply_monitor.apply_manage',{
                    url: '/manage',
                    templateUrl: 'beacon/page/apply/template_apply.html',
                    controller: 'applyManageCtrl'
                })
                // 新增业务应用
                .state('app.apply_monitor.apply_add',{
                    url: '/manage_add',
                    templateUrl: 'beacon/page/apply/template_apply.html',
                    controller: 'applyAddCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad',function( $ocLazyLoad ){
                            return $ocLazyLoad.load('ngGrid').then( function(){
                                return $ocLazyLoad.load([
                                    'beacon/controllers/applyMonitorController.js',
                                    'beacon/service/applyMonitorService.js'
                                ]);
                            });
                        }]
                    }
                })
                // 应用监控
                //.state('app.apply_monitor.apply_monitor',{
                //    url: '/monitor',
                //    templateUrl: 'beacon/page/apply/template_apply.html',
                //    controller: 'applyMonitorCtrl',
                //    resolve: {
                //        deps: ['$ocLazyLoad',function( $ocLazyLoad ){
                //            return $ocLazyLoad.load('ngGrid').then( function(){
                //                return $ocLazyLoad.load([
                //                    'beacon/controllers/applyMonitorController.js',
                //                    'beacon/service/applyMonitorService.js'
                //                ]);
                //            });
                //        }]
                //    }
                //})
                // 应用拓扑
                .state('app.apply_monitor.apply_topology',{
                    url: '/topology/:id',
                    templateUrl:'beacon/page/apply/apply_topology.html',
                    //'beacon/page/topo/template_topo_subnet.html',
                    //'beacon/page/apply/template_apply.html',
                    controller: 'applyTopologyCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad',function ($ocLazyLoad) {
                            return $ocLazyLoad
                                .load([
                                    'beacon/topo/topo-graph-service.js',
                                    'beacon/topo/topo-component-extends.js',
                                    'beacon/topo/isinonet-topo-globalinitparams.js',
                                    'beacon/topo/isinonet-jcanvas.min.js',
                                    'beacon/topo/isinonet-fullscreen-0.3.4.js',
                                    'css/nms/topo/isinonet-topo.css'
                                ]);
                        }]
                    }
                })
                // 应用性能分析
                .state('app.apply_monitor.apply_performance_analysis',{
                    url: '/performance_analysis/:id',
                    templateUrl: 'beacon/page/apply/template_apply.html',
                    controller: 'applyPerformanceAnalysisCtrl'
                })
                // 应用告警
                .state('app.apply_monitor.apply_alarm',{
                    url: '/alarm/:id',
                    templateUrl: 'beacon/page/apply/template_apply.html',
                    controller: 'applyAlarmCtrl'
                })

                /*** 网络流量监测 ***/
                .state('app.flowmon',{
                    url: '/flowmon',
                    templateUrl: 'beacon/page/template_v1.html',
                    resolve: {
                        deps: ['$ocLazyLoad',function ($ocLazyLoad) {
                            return $ocLazyLoad
                                .load(['beacon/controllers/flowMonitor.js',
                                    'beacon/service/flowMonitor_service.js'
                                ]);
                        }]
                    }
                })
                // 概览
                .state('app.flowmon.overview',{
                    url: '/overview',
                    templateUrl: 'beacon/page/flowmon/app_flow_overview.html',
                    controller: 'flowMonitorOverviewCtrl'
                })
				// 链路
                .state('app.flowmon.link',{
                    url: '/link',
                    templateUrl: 'beacon/page/flowmon/app_flow_list.html',
                    controller: 'flowMonitorLinkCtrl'
                })
                // 端到端
                .state('app.flowmon.ete',{
                    url: '/ete',
                    templateUrl: 'beacon/page/flowmon/app_flow_list.html',
                    controller: 'flowMonitorEteCtrl'
                })
                // 主机
                .state('app.flowmon.host',{
                    url: '/host',
                    templateUrl: 'beacon/page/flowmon/app_flow_list.html',
                    controller: 'flowMonitorHostCtrl'
                })
                // 子网
                .state('app.flowmon.subnet',{
                    url: '/subnet',
                    templateUrl: 'beacon/page/flowmon/app_flow_list.html',
                    controller: 'flowMonitorSubnetCtrl'
                })
                // 应用
                .state('app.flowmon.serv',{
                    url: '/serv',
                    templateUrl: 'beacon/page/flowmon/app_flow_list.html',
                    controller: 'flowMonitorServCtrl'
                })
                // 群组
                .state('app.flowmon.groups',{
                    url: '/groups',
                    templateUrl: 'beacon/page/flowmon/app_flow_list.html',
                    controller: 'flowMonitorGroupsCtrl'
                })

                /** 机房环境监测 **/
                .state('app.room_environment_monitor',{
                    url: '/room_environment_monitor',
                    templateUrl: 'beacon/page/template_v1.html',
                    resolve: {
                        deps: ['$ocLazyLoad',function ($ocLazyLoad) {
                            return $ocLazyLoad
                                .load(['beacon/controllers/roomMonitorController.js',
                                    'beacon/service/roomMonitorService.js',
                                    'beacon/mapcore/basemap.js'
                                ])
                        }]
                    }
                })
                // 机房监测概览
                .state('app.room_environment_monitor.room_monitor_overview',{
                    url: '/overview',
                    templateUrl: 'beacon/page/room/template_overview.html',
                    controller: 'roomOverviewCtrl'
                })
                // 机房资源配置
                .state('app.room_environment_monitor.room_resource_allocation',{
                    url: '/allocation',
                    templateUrl: 'beacon/page/room/template_room.html',
                    controller: 'roomAllocationCtrl'
                })
                .state('openmap', {
                    url: '/openmap',
                    templateUrl: 'beacon/page/topo/modal_gis.html',
                    controller: 'openmapCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    'beacon/mapcore/basemap.js'
                                ]);
                            }]
                    }
                })
                // 机房机柜资源配置
                .state('app.room_environment_monitor.cabinet',{
                    url: '/cabinet',
                    templateUrl: 'beacon/page/room/template_room.html',
                    controller: 'cabinetAllocationCtrl'
                })
                // 环境监测数据源列表
                .state('app.room_environment_monitor.environmental_monitoring_data',{
                    url: '/source',
                    templateUrl: 'beacon/page/room/template_room.html',
                    controller: 'roomDataSourceCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad',function( $ocLazyLoad ){
                            return $ocLazyLoad.load('ngGrid').then( function(){
                                return $ocLazyLoad.load([
                                    'beacon/controllers/roomMonitorController.js',
                                    'beacon/service/roomMonitorService.js'
                                ]);
                            });
                        }]
                    }
                })
                //环境监测数据源配置
                .state('app.room_environment_monitor.environmental_monitoring_data_configuration',{
                    url: '/source_configuration/:id',
                    templateUrl: 'beacon/page/room/template_room.html',
                    controller: 'roomDataSourceConfigurationCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad',function( $ocLazyLoad ){
                            return $ocLazyLoad.load('ngGrid').then( function(){
                                return $ocLazyLoad.load([
                                    'beacon/controllers/roomMonitorController.js',
                                    'beacon/service/roomMonitorService.js'
                                ]);
                            });
                        }]
                    }
                })
                // 环境监测仪表盘
                .state('app.room_environment_monitor.environmental_monitoring_instrument',{
                    url: '/instrument/:id',
                    templateUrl: 'beacon/page/room/template_room.html',
                    controller: 'roomInstrumentCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad',function( $ocLazyLoad ){
                            return $ocLazyLoad.load('ngGrid').then( function(){
                                return $ocLazyLoad.load([
                                    'beacon/controllers/roomMonitorController.js',
                                    'beacon/service/roomMonitorService.js'
                                ]);
                            });
                        }]
                    }
                })
                // 机房3D拓扑
                .state('app.room_environment_monitor.room_3d_topology',{
                    url: '/topology',
                    templateUrl: 'beacon/page/room/template_room_topo.html',
                    controller: 'roomTopologyCtrl'
                })
                // 机房事件清单列表
                .state('app.room_environment_monitor.room_event_listing',{
                    url: '/event',
                    templateUrl: 'beacon/page/room/template_room.html',
                    controller: 'roomEventListingCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad',function( $ocLazyLoad ){
                            return $ocLazyLoad.load('ngGrid').then( function(){
                                return $ocLazyLoad.load([
                                    'beacon/controllers/roomMonitorController.js',
                                    'beacon/service/roomMonitorService.js'
                                ]);
                            });
                        }]
                    }
                })
                // 机房事件清单分析报告
                .state('app.room_environment_monitor.event_report',{
                    url: '/event_report',
                    templateUrl: 'beacon/page/room/template_room.html',
                    controller: 'roomEventListingReportCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad',function( $ocLazyLoad ){
                            return $ocLazyLoad.load('ngGrid').then( function(){
                                return $ocLazyLoad.load([
                                    'beacon/controllers/roomMonitorController.js',
                                    'beacon/service/roomMonitorService.js'
                                ]);
                            });
                        }]
                    }
                })

                /*** 告警管理 ***/
                .state('app.alarm',{
                    url: '/alarm',
                    templateUrl: 'beacon/page/template_v1.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['beacon/controllers/alarmController.js',
                                        'beacon/service/alarmService.js'  ]);
                            } ]
                    }
                })
                //告警统计
                .state('app.alarm.alarm_statistics',{
                    url: '/alarm_statistics',
                    templateUrl: 'beacon/page/alarm/app_alarm_statistics.html',
                    controller: 'alarmStatisticsCtrl'
                })
                //当前告警列表
                .state('app.alarm.current_alarm',{
                    url: '/current_alarm',
                    templateUrl: 'beacon/page/alarm/app_alarm_list.html',
                    controller: 'currentAlarmListCtrl'
                })
                //当前告警详情
                .state('app.alarm.current_alarm_info',{
                    url: '/current_alarm_info/:id/:alarm_name',
                    templateUrl: 'beacon/page/alarm/app_alarm_info.html',
                    controller: 'currentAlarmInfoCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['beacon/demo_data/alarm/currentAlarmInfo.json']);
                            } ]
                    }
                })
                //当前告警报告
                .state('app.alarm.current_alarm_analysis_report',{
                    url: '/current_alarm_analysis_report/:id/:alarm_name',
                    templateUrl: 'beacon/page/alarm/app_alarm_analysis_report.html',
                    controller: 'currentAlarmAnalysisReport'
                })
                //历史告警列表
                .state('app.alarm.history_alarm',{
                    url: '/history_alarm',
                    templateUrl: 'beacon/page/alarm/app_alarm_list.html',
                    controller: 'historyAlarmListCtrl'
                })
                //历史告警详情
                .state('app.alarm.history_alarm_info',{
                    url: '/history_alarm_info/:id/:alarm_name',
                    templateUrl: 'beacon/page/alarm/app_alarm_info.html',
                    controller: 'historyAlarmInfoCtrl'
                })
                //历史告警报告
                .state('app.alarm.history_alarm_analysis_report',{
                    url: '/history_alarm_analysis_report/:id/:alarm_name',
                    templateUrl: 'beacon/page/alarm/app_alarm_analysis_report.html',
                    controller: 'historyAlarmAnalysisReport'
                })
                //告警阈值配置
                .state('app.alarm.threshold_config',{
                    url: '/threshold_config',
                    templateUrl: 'beacon/page/alarm/app_alarm_list.html',
                    controller: 'thresholdConfigListCtrl'
                })
                //告警配置
                .state('app.alarm.alarm_config',{
                    url: '/alarm_config',
                    templateUrl: 'beacon/page/alarm/app_alarm_list.html',
                    controller: 'alarmConfigListCtrl'
                })

                /*** 运维管理 ***/
                .state('app.maintain',{
                    url: '/maintain',
                    templateUrl: 'beacon/page/template_v1.html',
                    resolve: {
                        deps: [ '$ocLazyLoad',function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['beacon/controllers/maintainController.js',
                                        'beacon/service/maintainService.js'  ]);
                            }]
                    }
                })
                //运维工单列表
                .state('app.maintain.maintain_ticket',{
                    url: '/ticket',
                    templateUrl: 'beacon/page/maintain/template_maintain.html',
                    controller: 'ticketCtrl'
                })
                //新建工单
                .state('app.maintain.maintain_ticket_create',{
                    url: '/ticket_create',
                    templateUrl: 'beacon/page/maintain/template_maintain.html',
                    controller: 'ticketCreateCtrl'
                    //resolve: {
                    //    deps: ['$ocLazyLoad',
                    //        function( $ocLazyLoad){
                    //            return $ocLazyLoad.load('angularFileUpload').then(
                    //                //function(){
                    //                //    return $ocLazyLoad.load(['beacon/controllers/maintainController.js',
                    //                //        'beacon/service/maintainService.js'  ]);
                    //                //}
                    //            );
                    //        }]
                    //}
                })
                //查看工单
                .state('app.maintain.maintain_overview_view',{
                    url: '/ticket_view/:id/:number/:theme',
                    templateUrl: 'beacon/page/maintain/template_maintain.html',
                    controller: 'ticketViewCtrl'
                    //resolve: {
                    //    deps: ['$ocLazyLoad',
                    //        function( $ocLazyLoad){
                    //            return $ocLazyLoad.load('angularFileUpload').then(
                    //                function(){
                    //                    return $ocLazyLoad.load(['beacon/controllers/maintainController.js',
                    //                        'beacon/service/maintainService.js'  ]);
                    //                }
                    //            );
                    //        }]
                    //}
                })
                //知识库管理列表
                .state('app.maintain.knowledge_manage',{
                    url: '/knowledge',
                    templateUrl: 'beacon/page/maintain/template_maintain.html',
                    controller: 'knowledgeCtrl'
                })
                //创建新词条
                .state('app.maintain.knowledge_entry_create',{
                    url: '/entry_create',
                    templateUrl: 'beacon/page/maintain/template_maintain.html',
                    controller: 'knowledgeCreateCtrl'
                    //resolve: {
                    //    deps: ['$ocLazyLoad',
                    //        function( $ocLazyLoad){
                    //            return $ocLazyLoad.load('angularFileUpload').then(
                    //                function(){
                    //                    return $ocLazyLoad.load(['beacon/controllers/maintainController.js',
                    //                        'beacon/service/maintainService.js'  ]);
                    //                }
                    //            );
                    //        }]
                    //}
                })
                //查看词条
                .state('app.maintain.knowledge_entry_view', {
                    url: '/entry_view/:id/:number/:entryName',
                    templateUrl: 'beacon/page/maintain/template_maintain.html',
                    controller: 'knowledgeViewCtrl'
                    //resolve: {
                    //    deps: ['$ocLazyLoad',
                    //        function ($ocLazyLoad) {
                    //            return $ocLazyLoad.load('angularFileUpload').then(
                    //                function () {
                    //                    return $ocLazyLoad.load(['beacon/controllers/maintainController.js',
                    //                        'beacon/service/maintainService.js']);
                    //                }
                    //            );
                    //        }]
                    //}
                })

                //供应商管理列表
                .state('app.maintain.supplier_manage',{
                    url: '/supplier',
                    templateUrl: 'beacon/page/maintain/template_maintain.html',
                    controller: 'supplierCtrl'
                })
                //新增供应商
                .state('app.maintain.supplier_create',{
                    url: '/supplier_create',
                    templateUrl: 'beacon/page/maintain/template_maintain.html',
                    controller: 'supplierCreateCtrl'
                    //resolve: {
                    //    deps: ['$ocLazyLoad',
                    //        function( $ocLazyLoad){
                    //            return $ocLazyLoad.load('angularFileUpload').then(
                    //                function(){
                    //                    return $ocLazyLoad.load(['beacon/controllers/maintainController.js',
                    //                        'beacon/service/maintainService.js']);
                    //                }
                    //            );
                    //        }]
                    //}
                })
                //货品清单
                .state('app.maintain.goods_manage',{
                    url: '/goods',
                    templateUrl: 'beacon/page/maintain/template_maintain.html',
                    controller: 'goodsCtrl'
                })
                //供应商详情
                .state('app.maintain.supplier_details',{
                    url: '/supplier_details/:id',
                    templateUrl: 'beacon/page/maintain/template_maintain.html',
                    controller: 'supplierDetailsCtrl'
                    //resolve: {
                    //    deps: ['$ocLazyLoad',
                    //        function( $ocLazyLoad){
                    //            return $ocLazyLoad.load('angularFileUpload').then(
                    //                function(){
                    //                    return $ocLazyLoad.load(['beacon/controllers/maintainController.js',
                    //                        'beacon/service/maintainService.js'  ]);
                    //                }
                    //            );
                    //        }]
                    //}
                })
                //合同管理列表
                .state('app.maintain.contract_manage',{
                    url: '/contract',
                    templateUrl: 'beacon/page/maintain/template_maintain.html',
                    controller: 'contractCtrl'
                })
                //新增合同
                .state('app.maintain.contract_create',{
                    url: '/contract_create',
                    templateUrl: 'beacon/page/maintain/template_maintain.html',
                    controller: 'contractCreateCtrl'
                    //resolve: {
                    //    deps: ['$ocLazyLoad',
                    //        function( $ocLazyLoad){
                    //            $ocLazyLoad.load('angularFileUpload').then(
                    //                function(){
                    //                    return $ocLazyLoad.load(['beacon/controllers/maintainController.js',
                    //                        'beacon/service/maintainService.js'  ]);
                    //                }
                    //            );
                    //            $ocLazyLoad.load('ngGrid').then(
                    //                function(){
                    //                    return $ocLazyLoad.load([
                    //                        'beacon/controllers/maintainController.js',
                    //                        'beacon/service/maintainService.js'
                    //                    ]);
                    //                }
                    //            );
                    //            return $ocLazyLoad;
                    //        }]
                    //}
                })
                //合同详情
                .state('app.maintain.contract_details',{
                    url: '/contract_details/:id',
                    templateUrl: 'beacon/page/maintain/template_maintain.html',
                    controller: 'contractDetailsCtrl'
                    //resolve: {
                    //    deps: ['$ocLazyLoad',
                    //        function( $ocLazyLoad){
                    //            $ocLazyLoad.load('angularFileUpload').then(
                    //                function(){
                    //                    return $ocLazyLoad.load(['beacon/controllers/maintainController.js',
                    //                        'beacon/service/maintainService.js'  ]);
                    //                }
                    //            );
                    //            $ocLazyLoad.load('ngGrid').then(
                    //                function(){
                    //                    return $ocLazyLoad.load([
                    //                        'beacon/controllers/maintainController.js',
                    //                        'beacon/service/maintainService.js'
                    //                    ]);
                    //                }
                    //            );
                    //            return $ocLazyLoad;
                    //        }]
                    //}
                })
                /*** 报表管理 ***/
                .state('app.report',{
                    url: '/report',
                    templateUrl: 'beacon/page/template_v1.html',
                    resolve: {
                        deps: [ '$ocLazyLoad',function ($ocLazyLoad) {
                            return $ocLazyLoad
                                .load(['beacon/controllers/reportController.js',
                                    'beacon/controllers/sharedController.js',
                                    'beacon/service/reportService.js'  ]);
                        }]
                    }
                })
                //报表模板
                .state('app.report.report_template',{
                    url: '/report_template',
                    templateUrl: 'beacon/page/report/template_report.html',
                    controller: 'templateCtrl'
                })
                //周期报表
                .state('app.report.period_report',{
                    url: '/period_report',
                    templateUrl: 'beacon/page/report/template_report.html',
                    controller: 'periodCtrl'
                })
                //查看周期报表
                .state('app.report.period_report_view',{
                    url: '/period_report_view/:id',
                    templateUrl: 'beacon/page/report/template_report.html',
                    controller: 'periodViewCtrl'
                })
                //新增周期报表
                .state('app.report.period_report_add',{
                    url: '/period_report_add/:templateName',
                    templateUrl: 'beacon/page/report/template_report.html',
                    controller: 'periodAddCtrl'
                })
                //历史报表
                .state('app.report.history_report',{
                    url: '/history_report/:id',
                    templateUrl: 'beacon/page/report/template_report.html',
                    controller: 'historyCtrl'
                })

                /*** 大屏管理 ***/
                .state('app.bigscreen',{
                    url:'/bigscreen',
                    templateUrl: 'beacon/page/template_v1.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'beacon/controllers/bigscreenManger.js',
                                        'beacon/service/bigscreenService.js'
                                    ]);
                            } ]
                    }
                })
                .state('app.bigscreen.test1',{
                    url: '/bigscreenTemplate',
                    templateUrl: 'beacon/page/bigscreen/bigscreenManage.html',
                    controller: 'bigscreenTemplate'
                })
                .state('app.bigscreen.demos',{
                    url: '/bigscreenDemos',
                    templateUrl: 'beacon/page/bigscreen/demos.html',
                    controller: 'bigscreenTemplate'
                })
                //.state('app.bigscreen.test2',{
                //    url:'/bigscreenCase',
                //    templateUrl: 'beacon/page/bigscreen/bigscreenCase.html',
                //    controller: 'bigscreenCase'
                //})

                /*** 系统管理 ***/
                .state('app.system',{
                    url: '/system',
                    templateUrl: 'beacon/page/template_v1.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['beacon/controllers/sharedController.js',
                                        'beacon/controllers/systemManager.js',
                                        'beacon/service/system_service.js'
                                    ]);
                            } ]
                    }
                })
                // 登录模板
                .state('app.system.loginTemplate',{
                    url: '/templates',
                    templateUrl: 'beacon/page/system/app_system_template.html',
                    controller: 'sysLoginTemplateCtrl'
                })
                // 数据字典
                .state('app.system.dictionary',{
                    url: '/dictionary',
                    templateUrl: 'beacon/page/system/app_system_list.html',
                    controller: 'sysDictionaryCtrl'
                })
                // 用户管理
                .state('app.system.userControl',{
                    url: '/userControl',
                    templateUrl: 'beacon/page/system/user_control.html',
                    controller: 'userControl'
                })
                // 权限管理
                .state('app.system.authorityControl',{
                    url: '/authorityControl',
                    templateUrl: 'beacon/page/system/system_authority.html',
                    controller: 'authorityControl'
                })
                // 数据转储
                .state('app.system.dataDumpCtrl',{
                    url: '/dataDumpCtrl',
                    templateUrl: 'beacon/page/system/data_dump.html',
                    controller: 'dataDumpCtrl'
                })
                // 系统健康状态
                .state('app.system.system_health',{
                    url: '/system_health',
                    templateUrl: 'beacon/page/system/system_health.html',
                    controller: 'system_health'
                })
                // 日志管理
                .state('app.mgr_log',{
                    url: '/mgr_log',
                    templateUrl: 'beacon/page/system/app_system_log_manage.html',
                    controller:'logManage',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    'beacon/controllers/sharedController.js',
                                    'beacon/controllers/systemManager.js',
                                    'beacon/service/system_service.js'
                                ]);
                            }]
                    }
                })
                .state('app.beacon',{
                    url: '/beacon',
                    templateUrl: 'beacon/page/template_v1.html'
                })
                //工作台
                .state( 'app.beacon.overview',{
                    url: '/overview',
                    templateUrl: 'beacon/page/template_overview.html',
                    controller: 'dashboardCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['vendor/d3/d3-funnel-charts.js',
                                        'beacon/controllers/demo.js',
                                        'beacon/service/applyMonitorService.js',
                                        'beacon/service/flowMonitor_service.js',
                                        'beacon/service/maintainService.js'
                                    ]);
                            } ]
                    }
                })
                .state('app.beacon.ua_gl',{
                    url: '/ua_gl',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'uaglCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['beacon/controllers/userAnalysis.js' ]);
                            } ]
                    }
                })
                .state('app.beacon.ua_ar_all',{
                    url: '/ua_ar_all',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'uaarallCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['beacon/controllers/userAnalysis.js' ]);
                            } ]
                    }
                })
                .state('app.beacon.ua_ar_detail',{
                    url: '/ua_ar_detail/:id/:type/:parentId',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'uaardetailCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/userAnalysis.js' ]);
                            } ]
                    }
                })
                .state('app.beacon.ua_ar_compare',{
                    url: '/ua_ar_compare/:name?type&parentId',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'uaarcompareCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(
                                    'ui.select')
                                    .then(
                                    function () {
                                        return $ocLazyLoad
                                            .load([ 'beacon/controllers/userAnalysis.js' ]);
                                    });
                            } ]
                    }
                })
                .state('app.beacon.ua_no_all',{
                    url: '/ua_no_all',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'uanoallCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/userAnalysis.js' ]);
                            } ]
                    }
                })
                .state('app.beacon.ua_no_detail',{
                    url: '/ua_no_detail/:type/:name?rid&rname',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'uanodetailCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/userAnalysis.js' ]);
                            } ]
                    }
                })
                .state('app.beacon.ua_no_new',{
                    url: '/ua_no_new',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'uanonewCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/userAnalysis.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ua_no_old',
                {
                    url: '/ua_no_old',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'uanooldCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/userAnalysis.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ua_ut_browser',
                {
                    url: '/ua_ut_browser',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'uautbrowserCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/userAnalysis.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ua_ut_operation',
                {
                    url: '/ua_ut_operation',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'uautoperationCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/userAnalysis.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ua_ut_device',
                {
                    url: '/ua_ut_device',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'uautdeviceCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/userAnalysis.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ua_ut_isp',
                {
                    url: '/ua_ut_isp',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'uautispCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/userAnalysis.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ua_ut_detail',
                {
                    url: '/ua_ut_detail/:type?id',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'uautdetailCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/userAnalysis.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ua_ut_compare',
                {
                    url: '/ua_ut_compare/:name?type',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'uautcompareCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('ui.select').then(
                                    function () {
                                        return $ocLazyLoad.load([ 'beacon/controllers/userAnalysis.js' ]);
                                    });
                            } ]
                    }
                })
                .state(
                'app.beacon.ua_gp_all',
                {
                    url: '/ua_gp_all',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'uagpallCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([ 'beacon/controllers/userAnalysis.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ua_gp_one',
                {
                    url: '/ua_gp_one/:id/:name',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'uagponeCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([ 'beacon/controllers/userAnalysis.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ua_gp_add',
                {
                    url: '/ua_gp_add',
                    templateUrl: 'beacon/page/template_v1_groupAdd.html',
                    controller: 'uagpaddCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([ 'beacon/controllers/userAnalysis.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ua_st_all',
                {
                    url: '/ua_st_all',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'uastallCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([ 'beacon/controllers/userAnalysis.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.marketing',
                {
                    url: '/marketing',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'mkglCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/marketing' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.mk_search',
                {
                    url: '/mk_search',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'mksearchCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/marketing' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.mk_search_word',
                {
                    url: '/mk_search_word',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'mksearchwordCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/marketing' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.mk_outerLink',
                {
                    url: '/mk_outerLink',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'mkouterlinkCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/marketing' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.mk_innerPromotion',
                {
                    url: '/mk_innerPromotion',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'mkinnerpromotionCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/marketing' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.mk_email',
                {
                    url: '/mk_email',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'mkemailCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/marketing' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.mk_socialization',
                {
                    url: '/mk_socialization',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'mksocializationCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/marketing' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.mk_detail',
                {
                    url: '/mk_detail',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'mkdetailCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/marketing' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.mk_promotionManager',
                {
                    url: '/mk_promotionManager',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'mkpromotionmanagerCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/marketing' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.appPlatform',
                {
                    url: '/app_Platform',
                    templateUrl: 'beacon/page/app_Platform.html',
                    controller: "app_Platform2",
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'beacon/controllers/appPlatform.js',
                                        'beacon/service/appPlatformService.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ap_autoDiscover',
                {
                    url: '/ap_autoDiscover',
                    templateUrl: 'beacon/page/ap_autoDiscover.html',
                    controller: 'ap_autoDiscover2',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'beacon/controllers/appPlatform.js',
                                        'beacon/service/appPlatformService.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ap_visitBehavior',
                {
                    url: '/ap_visitBehavior',
                    templateUrl: 'beacon/page/ap_visitBehavior.html',
                    controller: 'ap_visitBehavior2',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'beacon/controllers/appPlatform.js',
                                        'beacon/service/appPlatformService.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ap_visitExperience',
                {
                    url: '/ap_visitExperience',
                    templateUrl: 'beacon/page/ap_visitExperience.html',
                    controller: 'ap_visitExperience2',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'beacon/controllers/appPlatform.js',
                                        'beacon/service/appPlatformService.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ap_search',
                {
                    url: '/ap_search',
                    templateUrl: 'beacon/page/ap_search.html',
                    controller: 'ap_search2',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'beacon/controllers/appPlatform.js',
                                        'beacon/service/appPlatformService.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ap_visitPath',
                {
                    url: '/ap_visitPath',
                    templateUrl: 'tpl/beacon/ap_visitPath.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'js/app/beacon/appPlatformService.js',
                                        'js/app/beacon/appPlatform.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ap_assignPageGroup',
                {
                    url: '/ap_assignPageGroup',
                    templateUrl: 'tpl/beacon/ap_assignPageGroup.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'js/app/beacon/appPlatformService.js',
                                        'js/app/beacon/appPlatform.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ap_assignPage',
                {
                    url: '/ap_assignPage',
                    templateUrl: 'tpl/beacon/ap_assignPage.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'js/app/beacon/appPlatformService.js',
                                        'js/app/beacon/appPlatform.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.ap_assignPageGroupCompare',
                {
                    url: '/ap_assignPageGroupCompare',
                    templateUrl: 'tpl/beacon/ap_assignPageGroupCompare.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(
                                    'ui.select')
                                    .then(
                                    function () {
                                        return $ocLazyLoad
                                            .load([
                                                'js/app/beacon/appPlatformService.js',
                                                'js/app/beacon/appPlatform.js' ]);
                                    });
                            } ]
                    }
                })
                .state(
                'app.beacon.ap_assignPageCompare',
                {
                    url: '/ap_assignPageCompare',
                    templateUrl: 'tpl/beacon/ap_assignPageCompare.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(
                                    'ui.select')
                                    .then(
                                    function () {
                                        return $ocLazyLoad
                                            .load([
                                                'js/app/beacon/appPlatformService.js',
                                                'js/app/beacon/appPlatform.js' ]);
                                    });
                            } ]
                    }
                })
                .state(
                'app.beacon.product',
                {
                    url: '/product',
                    templateUrl: 'tpl/beacon/product.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'js/app/beacon/productService.js',
                                        'js/app/beacon/product.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.pd_group',
                {
                    url: '/pd_group',
                    templateUrl: 'tpl/beacon/product.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'js/app/beacon/productService.js',
                                        'js/app/beacon/product.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.pd_subgroup',
                {
                    url: '/pd_subgroup',
                    templateUrl: 'tpl/beacon/product.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'js/app/beacon/productService.js',
                                        'js/app/beacon/product.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.pd_produce',
                {
                    url: '/pd_produce',
                    templateUrl: 'tpl/beacon/product.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'js/app/beacon/productService.js',
                                        'js/app/beacon/product.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.pd_search',
                {
                    url: '/pd_search',
                    templateUrl: 'tpl/beacon/product.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'js/app/beacon/productService.js',
                                        'js/app/beacon/product.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.pd_manager',
                {
                    url: '/pd_manager',
                    templateUrl: 'tpl/beacon/product.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'js/app/beacon/productService.js',
                                        'js/app/beacon/product.js' ]);
                            } ]
                    }
                })
                .state(
                'app.ua_gl',
                {
                    url: '/ua_gl',
                    templateUrl: 'beacon/page/template_v2_ua_gl.html',
                    controller: 'uaglCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['ngGrid']).then(
                                    function () {
                                        return $ocLazyLoad.load([
                                            'vendor/jquery/jvectormap/version2/jquery.vmap.js',
                                            'vendor/jquery/jvectormap/version2/maps/jquery.vmap.world.js',
                                            'vendor/jquery/jvectormap/version2/maps/jquery.vmap.china.js',
                                            'vendor/jquery/jvectormap/version2/jqvmap.css',
                                            'beacon/controllers/userAnalysis_v2.js' ]);
                                    }
                                );
                            }]
                    }
                })
                .state(
                'app.ua_ar',
                {
                    url: '/ua_ar',
                    templateUrl: 'beacon/page/template_v2_ua_ar.html',
                    controller: 'uaarCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'vendor/jquery/jvectormap/version2/jquery.vmap.js',
                                        'vendor/jquery/jvectormap/version2/maps/jquery.vmap.world.js',
                                        'vendor/jquery/jvectormap/version2/maps/jquery.vmap.china.js',
                                        'vendor/jquery/jvectormap/version2/jqvmap.css',
                                        'beacon/controllers/userAnalysis_v2.js' ]);
                            } ]
                    }
                })
                .state(
                'app.ua_no',
                {
                    url: '/ua_no',
                    templateUrl: 'beacon/page/template_v2_ua_no.html',
                    controller: 'uanoCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/userAnalysis_v2.js' ]);
                            } ]
                    }
                })
                .state(
                'app.ua_ut',
                {
                    url: '/ua_ut',
                    templateUrl: 'beacon/page/template_v2_ua_ut.html',
                    controller: 'uautCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/userAnalysis_v2.js' ]);
                            } ]
                    }
                })
                .state(
                'app.ua_tf',
                {
                    url: '/ua_tf',
                    templateUrl: 'beacon/page/template_v2_ua_tf.html',
                    controller: 'uatfCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/userAnalysis_v2.js' ]);
                            } ]
                    }
                })
                .state(
                'app.ua_query',
                {
                    url: '/ua_query',
                    templateUrl: 'beacon/page/template_v2_ua_query.html',
                    controller: 'uaqueryCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/userAnalysis_v2.js' ]);
                            } ]
                    }
                })
                .state(
                'app.appPlatform',
                {
                    url: '/app_Platform',
                    templateUrl: 'beacon/page/app_Platform.html',
                    controller: "app_Platform2",
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'beacon/controllers/appPlatform.js',
                                        'beacon/service/appPlatformService.js' ]);
                            } ]
                    }
                })
                .state(
                'app.ap_pageGroup',
                {
                    url: '/ap_pageGroup',
                    templateUrl: 'tpl/beacon/ap_assignPageGroup.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'js/app/beacon/appPlatformService.js',
                                        'js/app/beacon/appPlatform.js' ]);
                            } ]
                    }
                })
                .state(
                'app.ap_page',
                {
                    url: '/ap_page',
                    templateUrl: 'tpl/beacon/ap_assignPage.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'js/app/beacon/appPlatformService.js',
                                        'js/app/beacon/appPlatform.js' ]);
                            } ]
                    }
                })
                .state(
                'app.ap_search',
                {
                    url: '/ap_search',
                    templateUrl: 'beacon/page/ap_search.html',
                    controller: 'ap_search2',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'beacon/controllers/appPlatform.js',
                                        'beacon/service/appPlatformService.js' ]);
                            } ]
                    }
                })
                .state(
                'app.ap_event',
                {
                    url: '/ap_event',
                    templateUrl: 'beacon/page/ap_search.html',
                    controller: 'ap_search2',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'beacon/controllers/appPlatform.js',
                                        'beacon/service/appPlatformService.js' ]);
                            } ]
                    }
                })
                .state(
                'app.marketing',
                {
                    url: '/marketing',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'mkglCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/marketing' ]);
                            } ]
                    }
                })
                .state(
                'app.mk_search',
                {
                    url: '/mk_search',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'mksearchCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/marketing' ]);
                            } ]
                    }
                })
                .state(
                'app.mk_outerLink',
                {
                    url: '/mk_outerLink',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'mkouterlinkCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/marketing' ]);
                            } ]
                    }
                })
                .state(
                'app.mk_innerPromotion',
                {
                    url: '/mk_innerPromotion',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'mkinnerpromotionCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/marketing' ]);
                            } ]
                    }
                })
                .state(
                'app.mk_email',
                {
                    url: '/mk_email',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'mkemailCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/marketing' ]);
                            } ]
                    }
                })
                .state(
                'app.mk_socialization',
                {
                    url: '/mk_socialization',
                    templateUrl: 'beacon/page/template_v1_list.html',
                    controller: 'mksocializationCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/marketing' ]);
                            } ]
                    }
                })
                .state(
                'app.order',
                {
                    url: '/order',
                    controller: "NoteCtrl",
                    templateUrl: 'beacon/page/template_v2.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'beacon/controllers/orderRegion.js',
                                        'vendor/libs/moment.min.js' ]);
                            } ]
                    }
                })
                .state(
                'app.od_Region',
                {
                    url: '/od_Region',
                    controller: "NoteCtrl",
                    templateUrl: 'beacon/page/template_v2.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'beacon/controllers/orderRegion.js',
                                        'vendor/libs/moment.min.js' ]);
                            } ]
                    }
                })
                .state(
                'app.od_terminal',
                {
                    url: '/od_terminal',
                    controller: "NoteCtrl",
                    templateUrl: 'beacon/page/template_v2.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'beacon/controllers/orderRegion.js',
                                        'vendor/libs/moment.min.js' ]);
                            } ]
                    }
                })
                .state(
                'app.od_user',
                {
                    url: '/od_user',
                    controller: "NoteCtrl",
                    templateUrl: 'beacon/page/template_v2.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'beacon/controllers/orderRegion.js',
                                        'vendor/libs/moment.min.js' ]);
                            } ]
                    }
                })
                .state(
                'app.od_source',
                {
                    url: '/od_source',
                    controller: "NoteCtrl",
                    templateUrl: 'beacon/page/template_v2.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([
                                        'beacon/controllers/orderRegion.js',
                                        'vendor/libs/moment.min.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.dashboard',
                {
                    url: '/dashboard',
                    templateUrl: 'beacon/page/template_overview.html',
                    controller: 'dashboardCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([ 'beacon/controllers/demo.js' ]);
                            } ]
                    }
                })
                .state(
                'app.beacon.dashboardConfig',
                {
                    url: '/dashboardConfig',
                    templateUrl: 'beacon/page/template_demo_update.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load('angularFileUpload')
                                    .then(function () {
                                        return $ocLazyLoad.load('js/controllers/file-upload.js');
                                    });
                            } ]
                    }
                })
                .state(
                'app.beacon.audit',
                {
                    url: '/audit',
                    templateUrl: 'beacon/page/template_demo_list.html',
                    controller: 'auditCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(
                                    'ui.select')
                                    .then(
                                    function () {
                                        return $ocLazyLoad
                                            .load([ 'beacon/controllers/demo.js' ]);
                                    });
                            } ]
                    }
                })
                .state(
                'app.demoArea',
                {
                    url: '/demoArea',
                    templateUrl: 'beacon/page/template_demo_area.html',
                    controller: 'uaarallCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['beacon/controllers/userAnalysis_v2.js' ]);
                            } ]
                    }
                })
        } ]);