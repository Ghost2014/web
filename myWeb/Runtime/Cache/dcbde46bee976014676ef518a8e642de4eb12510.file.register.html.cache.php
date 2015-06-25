<?php /* Smarty version Smarty-3.1.6, created on 2015-06-26 07:14:41
         compiled from "C:/wamp/www/myWeb/Home/View\Index\register.html" */ ?>
<?php /*%%SmartyHeaderCode:7102558a82b51eebb3-58764571%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'dcbde46bee976014676ef518a8e642de4eb12510' => 
    array (
      0 => 'C:/wamp/www/myWeb/Home/View\\Index\\register.html',
      1 => 1435274061,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '7102558a82b51eebb3-58764571',
  'function' => 
  array (
  ),
  'cache_lifetime' => 3600,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_558a82b522954',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_558a82b522954')) {function content_558a82b522954($_smarty_tpl) {?><?php echo $_smarty_tpl->getSubTemplate ("../Public/header.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 9999, null, array(), 0);?>

<div class="container" style="margin: 20px auto;">
    <form class="form-horizontal" method="post" action="<?php echo @__SELF__;?>
">
        <div class="form-group">
            <label class="col-sm-2 control-label">用户名</label>
            <div class="col-sm-10">
                <input type="text" name="username" class="form-control" placeholder="用户名">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">邮箱</label>
            <div class="col-sm-10">
                <input type="email" name="email" class="form-control" placeholder="邮箱">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">密 码</label>
            <div class="col-sm-10">
                <input type="password" name="password" class="form-control" placeholder="密码">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">再次输入</label>
            <div class="col-sm-10">
                <input type="password" name="password" class="form-control" placeholder="再次输入">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">手机</label>
            <div class="col-sm-10">
                <input type="tel" name="tel" class="form-control" placeholder="手机">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">QQ</label>
            <div class="col-sm-10">
                <input type="text" name="qq" class="form-control" placeholder="QQ">
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
<?php echo $_smarty_tpl->getSubTemplate ("../Public/footer.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 9999, null, array(), 0);?>
<?php }} ?>