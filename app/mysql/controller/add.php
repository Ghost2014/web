<?php
/**
 * Created by PhpStorm.
 * User: ghost
 * Date: 2015/6/16
 * Time: 16:33
 */
$bookname = $_POST['bookname'];
$writer = $_POST['writer'];

require_once('../public/mysql.class.php');

mysql_select_db('book',$link);

mysql_query('set names utf8');

$sql = "insert into book_list(book_name,book_list,date)values('$bookname','$writer',now());";

$res = mysql_query($sql,$link);

if(!$res)
{
    die('写入数据失败'.mysql_error());
}

echo "操作成功";

mysql_close();

