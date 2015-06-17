<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>在线图书馆</title>
    <link rel="stylesheet" href="../../lib/bootsrap/css/bootstrap.css"/>
</head>
<body>
<?php
include_once 'public/header.php';
require_once('public/mysql.class.php');
mysql_select_db('book',$link);
mysql_query('set names utf8');
$sql = "select * from book_list;";
$res = mysql_query($sql,$link);
if(!$res){
    die('数据库查询失败'.mysql_error());
}
?>
<div class="container">
    <table class="table">
        <thead>
        <tr>
            <th style="width:20%;">ID</th>
            <th style="width:20%;">书名</th>
            <th style="width:20%;">作者</th>
            <th style="width:20%;">录入时间</th>
            <th style="20%">操作</th>
        </tr>
        </thead>
        <tbody>
        <?php
        while($row = mysql_fetch_assoc($res))
        {
        ?>
        <tr>
            <td><?php echo $row['id'];?></td>
            <td><?php echo $row['book_name'];?></td>
            <td><?php echo $row['book_list'];?></td>
            <td><?php echo $row['date'];?></td>
            <td>
                <a href="update.php?id=<?php echo $row['id'];?>">编辑</a>
                <a href="<?php echo $row['id'];?>">删除</a>
            </td>
        </tr>
        <?php
        }
        ?>
        </tbody>
    </table>
</div>
</body>
</html>