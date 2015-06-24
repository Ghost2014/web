<?php /* Smarty version Smarty-3.1.6, created on 2015-06-24 16:52:37
         compiled from "C:\wamp\www\myWeb\Home\View\Index\Public\header.html" */ ?>
<?php /*%%SmartyHeaderCode:10152558a6fd502c065-50557996%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '1adb38c922b4af417aa78132e76e57ff8ef70202' => 
    array (
      0 => 'C:\\wamp\\www\\myWeb\\Home\\View\\Index\\Public\\header.html',
      1 => 1435135210,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '10152558a6fd502c065-50557996',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_558a6fd5062b7',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_558a6fd5062b7')) {function content_558a6fd5062b7($_smarty_tpl) {?><!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>喵星人</title>
    <link rel="stylesheet" href="/myWeb/lib/bootstrap-3.3.5-dist/css/bootstrap.min.css"/>
</head>
<body>
<header class="navbar navbar-inverse navbar-static-top" style="margin-bottom: 0;">
    <nav class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">喵星人</a>
        </div>
        <ul class="nav navbar-nav">
            <li class="active"><a href="#">首页</a></li>
            <li><a href="/myWeb/index.php/home/watch/w_list">围观</a></li>
            <li><a href="/myWeb/index.php/home/Scrawl/s_list">涂鸦</a></li>
        </ul>
        <p class="navbar-text navbar-right"><a href="" style="color:#fff;text-decoration: none;">登陆</a> | <a href="" style="color:#fff;text-decoration: none;">注册</a></p>
    </nav>
</header><?php }} ?>