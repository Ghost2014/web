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
?>
<div class="container">
    <form class="form-horizontal" method="post" action="controller/add.php">
        <div class="control-group">
            <label class="control-label" for="inputEmail">书名</label>
            <div class="controls">
                <input type="text" name="bookname">
            </div>
        </div>
        <div class="control-group">
            <label class="control-label" for="inputPassword">作者</label>
            <div class="controls">
                <input type="text" name="writer">
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <button type="submit" class="btn">确定</button>
            </div>
        </div>
    </form>
</div>
</body>
</html>