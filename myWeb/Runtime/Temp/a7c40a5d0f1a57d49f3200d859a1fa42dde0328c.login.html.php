<?php /*%%SmartyHeaderCode:633558a8273e24ca7-35406491%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a7c40a5d0f1a57d49f3200d859a1fa42dde0328c' => 
    array (
      0 => 'C:/wamp/www/myWeb/Home/View\\Index\\login.html',
      1 => 1435141091,
      2 => 'file',
    ),
    '358623d72a9d41d80752742a566129b4fead62a2' => 
    array (
      0 => 'C:\\wamp\\www\\myWeb\\Home\\View\\Public\\header.html',
      1 => 1435200951,
      2 => 'file',
    ),
    'ca6480c5eea45afd1134d6bcc48e61c6aa95d681' => 
    array (
      0 => 'C:\\wamp\\www\\myWeb\\Home\\View\\Public\\footer.html',
      1 => 1435139040,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '633558a8273e24ca7-35406491',
  'cache_lifetime' => 3600,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_558b6dbfb615f',
  'has_nocache_code' => false,
),true); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_558b6dbfb615f')) {function content_558b6dbfb615f($_smarty_tpl) {?><!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="/myWeb/lib/bootstrap-3.3.5-dist/css/bootstrap.min.css"/>
</head>
<body>
<header class="navbar navbar-inverse navbar-static-top" style="margin-bottom: 0;">
    <nav class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="/myWeb/index.php/home/index/index">喵星人</a>
        </div>
        <ul class="nav navbar-nav">
            <li class="active"><a href="/myWeb/index.php/home/index/index">首页</a></li>
            <li><a href="/myWeb/index.php/home/watch/w_list">围观</a></li>
            <li><a href="/myWeb/index.php/home/scrawl/s_list">涂鸦</a></li>
        </ul>
        <p class="navbar-text navbar-right">
            <a href="/myWeb/index.php/home/index/login" style="color:#fff;text-decoration: none;">登陆</a> |
            <a href="/myWeb/index.php/home/index/register" style="color:#fff;text-decoration: none;">注册</a>
        </p>
    </nav>
</header>
<div class="container" style="margin: 20px auto;">
    <form class="form-horizontal">
        <div class="form-group">
            <label class="col-sm-2 control-label">用户名</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="用户名">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">密 码</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" placeholder="密码">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <div class="checkbox">
                    <label>
                        <input type="checkbox"> 记住密码
                    </label>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default">提交</button>
            </div>
        </div>
    </form>
</div>
<footer class="container text-center" style="margin-bottom: 20px;">本项目源码受 MIT开源协议保护，文档受 CC BY 3.0 开源协议保护。</footer>
</body>
</html><?php }} ?>