<?php
/**
 * Created by PhpStorm.
 * User: MyPC
 * Date: 2015/6/27
 * Time: 13:17
 */

namespace Home\Model;

use Think\Model;

class UserModel extends Model{

    //通过重写父类属性实现表单验证

    // 是否批处理验证
    protected $patchValidate    =   true;

    // 自动验证定义
    protected $_validate = array(
        //验证用户名
        array('username','require','必须填写用户名'),
        array('password','require','必须输入密码'),
        //同一个项目可以设置多个验证
        array('password2','require','确认密码必须填写'),
        array('password2','password','密码信息必须一致',0,'confirm'),
        array('email','email','邮箱格式错误'),
        array('qq','/^[1-9]\d{4,10}$/','QQ格式不正确'),
        array('tel','require','必须输入手机号'),
    );
}