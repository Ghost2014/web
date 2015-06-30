<?php /* Smarty version Smarty-3.1.6, created on 2015-06-30 10:34:10
         compiled from "C:/wamp/www/web/myWeb/Home/View\Index\login.html" */ ?>
<?php /*%%SmartyHeaderCode:2814855920022a42fb9-52021435%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '5df3fe2c8225998fe3e392a8d80daed74d2c3b05' => 
    array (
      0 => 'C:/wamp/www/web/myWeb/Home/View\\Index\\login.html',
      1 => 1435282176,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2814855920022a42fb9-52021435',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_55920022aac75',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_55920022aac75')) {function content_55920022aac75($_smarty_tpl) {?><?php echo $_smarty_tpl->getSubTemplate ("../Public/header.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

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
<?php echo $_smarty_tpl->getSubTemplate ("../Public/footer.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
<?php }} ?>