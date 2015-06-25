<?php
/**
 * Created by PhpStorm.
 * User: ghost
 * Date: 2015/6/24
 * Time: 11:32
 * 产品入口
 */

//配置公用路径
define('APP_SITE','localhost');
define('APP_LIB','/myWeb/lib');
define('APP_URL','/myWeb/index.php/home');
define('APP_IMG','/myWeb/static/img');

//开启调试模式
define('APP_DEBUG',TRUE);

include 'lib/ThinkPHP/ThinkPHP.php';