<?php /* Smarty version Smarty-3.1.6, created on 2015-06-25 10:55:53
         compiled from "C:\wamp\www\myWeb\Home\View\Public\header.html" */ ?>
<?php /*%%SmartyHeaderCode:5716558a75ad887134-50940762%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '358623d72a9d41d80752742a566129b4fead62a2' => 
    array (
      0 => 'C:\\wamp\\www\\myWeb\\Home\\View\\Public\\header.html',
      1 => 1435200951,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '5716558a75ad887134-50940762',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_558a75ad8b9dc',
  'variables' => 
  array (
    'title' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_558a75ad8b9dc')) {function content_558a75ad8b9dc($_smarty_tpl) {?><!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</title>
    <link rel="stylesheet" href="<?php echo @APP_LIB;?>
/bootstrap-3.3.5-dist/css/bootstrap.min.css"/>
</head>
<body>
<header class="navbar navbar-inverse navbar-static-top" style="margin-bottom: 0;">
    <nav class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="<?php echo @APP_URL;?>
/index/index">喵星人</a>
        </div>
        <ul class="nav navbar-nav">
            <li class="active"><a href="<?php echo @APP_URL;?>
/index/index">首页</a></li>
            <li><a href="<?php echo @APP_URL;?>
/watch/w_list">围观</a></li>
            <li><a href="<?php echo @APP_URL;?>
/scrawl/s_list">涂鸦</a></li>
        </ul>
        <p class="navbar-text navbar-right">
            <a href="<?php echo @APP_URL;?>
/index/login" style="color:#fff;text-decoration: none;">登陆</a> |
            <a href="<?php echo @APP_URL;?>
/index/register" style="color:#fff;text-decoration: none;">注册</a>
        </p>
    </nav>
</header><?php }} ?>