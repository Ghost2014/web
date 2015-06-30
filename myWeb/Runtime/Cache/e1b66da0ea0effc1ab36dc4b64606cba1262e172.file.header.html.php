<?php /* Smarty version Smarty-3.1.6, created on 2015-06-30 12:06:12
         compiled from "C:\wamp\www\web\myWeb\Home\View\Public\header.html" */ ?>
<?php /*%%SmartyHeaderCode:40195591f9aa89f910-55243922%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'e1b66da0ea0effc1ab36dc4b64606cba1262e172' => 
    array (
      0 => 'C:\\wamp\\www\\web\\myWeb\\Home\\View\\Public\\header.html',
      1 => 1435637170,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '40195591f9aa89f910-55243922',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_5591f9aa93bd3',
  'variables' => 
  array (
    'title' => 0,
    'index' => 0,
    'subject' => 0,
    'case' => 0,
    'about' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5591f9aa93bd3')) {function content_5591f9aa93bd3($_smarty_tpl) {?><!doctype html>
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
/index/index">积微坊</a>
        </div>
        <ul class="nav navbar-nav">
            <li class=<?php echo $_smarty_tpl->tpl_vars['index']->value;?>
><a href="<?php echo @APP_URL;?>
/index/index">首页</a></li>
            <li class=<?php echo $_smarty_tpl->tpl_vars['subject']->value;?>
><a href="<?php echo @APP_URL;?>
/subject/s_list">专题</a></li>
            <li class=<?php echo $_smarty_tpl->tpl_vars['case']->value;?>
><a href="<?php echo @APP_URL;?>
/case/c_list">UI</a></li>
            <li class=<?php echo $_smarty_tpl->tpl_vars['about']->value;?>
><a href="<?php echo @APP_URL;?>
/about/a_list">关于</a></li>
        </ul>
        <p class="navbar-text navbar-right">
            <a href="<?php echo @APP_URL;?>
/index/login" style="color:#fff;text-decoration: none;">登陆</a> |
            <a href="<?php echo @APP_URL;?>
/index/register" style="color:#fff;text-decoration: none;">注册</a>
        </p>
    </nav>
</header><?php }} ?>