<?php /*%%SmartyHeaderCode:4519558a75ad7c7a97-67628210%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '50d51f24cc78cc2dee01d219be41bd4a2d7260f6' => 
    array (
      0 => 'C:/wamp/www/myWeb/Home/View\\Index\\index.html',
      1 => 1435136509,
      2 => 'file',
    ),
    '358623d72a9d41d80752742a566129b4fead62a2' => 
    array (
      0 => 'C:\\wamp\\www\\myWeb\\Home\\View\\Public\\header.html',
      1 => 1435136946,
      2 => 'file',
    ),
    'ca6480c5eea45afd1134d6bcc48e61c6aa95d681' => 
    array (
      0 => 'C:\\wamp\\www\\myWeb\\Home\\View\\Public\\footer.html',
      1 => 1435139040,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '4519558a75ad7c7a97-67628210',
  'cache_lifetime' => 3600,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_558a7becdd081',
  'has_nocache_code' => false,
),true); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_558a7becdd081')) {function content_558a7becdd081($_smarty_tpl) {?><!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>我是喵星人</title>
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
            <li><a href="/myWeb/index.php/home/Scrawl/s_list">涂鸦</a></li>
        </ul>
        <p class="navbar-text navbar-right"><a href="" style="color:#fff;text-decoration: none;">登陆</a> | <a href="" style="color:#fff;text-decoration: none;">注册</a></p>
    </nav>
</header>
<div style="height: 290px;"><img src="/myWeb/static/img/banner_0.jpg" alt="" style="max-width:100%;height:290px;"/></div>
<div class="container" style="padding-top:30px;">
    <div class="row">
        <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
                <img src="/myWeb/static/img/home_0.jpg" alt="">
                <div class="caption">
                    <h3>刘亦菲</h3>
                    <p>飘飘</p>
                    <p>
                        <a href="#" class="btn btn-primary">打招呼</a>
                        <a href="#" class="btn btn-default">读文章</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
                <img src="/myWeb/static/img/home_1.jpg" alt="">
                <div class="caption">
                    <h3>刘亦菲</h3>
                    <p>飘飘</p>
                    <p>
                        <a href="#" class="btn btn-primary">打招呼</a>
                        <a href="#" class="btn btn-default">读文章</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
                <img src="/myWeb/static/img/home_2.jpg" alt="">
                <div class="caption">
                    <h3>刘亦菲</h3>
                    <p>飘飘</p>
                    <p>
                        <a href="#" class="btn btn-primary">打招呼</a>
                        <a href="#" class="btn btn-default">读文章</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
                <img src="/myWeb/static/img/home_3.jpg" alt="">
                <div class="caption">
                    <h3>刘亦菲</h3>
                    <p>飘飘</p>
                    <p>
                        <a href="#" class="btn btn-primary">打招呼</a>
                        <a href="#" class="btn btn-default">读文章</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<footer class="container text-center" style="margin-bottom: 20px;">本项目源码受 MIT开源协议保护，文档受 CC BY 3.0 开源协议保护。</footer>
</body>
</html>
<?php }} ?>