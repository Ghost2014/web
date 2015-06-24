<?php
return array(
	//'配置项'=>'配置值'

    // 是否开启URL路由
    'URL_ROUTER_ON' => true,

    //设置默认模板
    'TMPL_ENGINE_TYPE' => 'Smarty',

    //开启页面Trace
    'SHOW_PAGE_TRACE' => true,

    //关闭模板缓存
    'TMPL_CACHE_ON' => true,

    //数据库设置
    'DB_TYPE'               =>  'mysql',     // 数据库类型
    'DB_HOST'               =>  '',          // 服务器地址
    'DB_NAME'               =>  '',          // 数据库名
    'DB_USER'               =>  '',          // 用户名
    'DB_PWD'                =>  '',          // 密码
    'DB_PORT'               =>  '',          // 端口
    'DB_PREFIX'             =>  '',          // 数据库表前缀
    'DB_PARAMS'          	=>  array(),     // 数据库连接参数
    'DB_DEBUG'  			=>  TRUE,        // 数据库调试模式 开启后可以记录SQL日志
    'DB_FIELDS_CACHE'       =>  true,        // 启用字段缓存
    'DB_CHARSET'            =>  'utf8',      // 数据库编码默认采用utf8
);