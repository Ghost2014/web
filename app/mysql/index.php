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
    <form class="form-horizontal" method="post" action="controller/login.php">
        <div class="control-group">
            <label class="control-label" for="inputEmail">邮箱</label>
            <div class="controls">
                <input type="text" id="inputEmail" placeholder="Email" name="email">
            </div>
        </div>
        <div class="control-group">
            <label class="control-label" for="inputPassword">密码</label>
            <div class="controls">
                <input type="password" id="inputPassword" placeholder="Password" name="password">
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <button type="submit" class="btn">登录</button>
            </div>
        </div>
    </form>
</div>
</body>
</html>