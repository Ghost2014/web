<?php
/**
 * Created by PhpStorm.
 * User: ghost
 * Date: 2015/6/16
 * Time: 17:39
 */
$host = "127.0.0.1";
$user = "root";
$pass = "";
$link = mysql_connect($host,$user,$pass);
if(!$link)
{
    die('链接数据库失败：'.mysql_error());
}
//echo "数据库链接成功";