<?php /* Smarty version Smarty-3.1.6, created on 2015-06-24 17:09:21
         compiled from "C:\wamp\www\myWeb\Home\View\Public\header.html" */ ?>
<?php /*%%SmartyHeaderCode:27238558a709f850568-19538370%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '358623d72a9d41d80752742a566129b4fead62a2' => 
    array (
      0 => 'C:\\wamp\\www\\myWeb\\Home\\View\\Public\\header.html',
      1 => 1435136946,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '27238558a709f850568-19538370',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_558a709f88707',
  'variables' => 
  array (
    'title' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_558a709f88707')) {function content_558a709f88707($_smarty_tpl) {?><!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</title>
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
</header><?php }} ?>