<?php
namespace Home\Controller;

use Home\Model\UserModel;
use Think\Controller;

class IndexController extends Controller {
    public function index()
    {
        $title = "我是喵星人";
        $index = "active";
        $this->assign('title',$title);  //设置title
        $this->assign('index',$index);  //设置导航当前状态


        $this->display();   //显示模板
    }

    //login
    public function login()
    {
        $this->display();
    }

    //register
    public function register()
    {
        $user = new UserModel();
        if(!empty($_POST))
        {
            $z = $user->create();        //数据收集 表单name值要和数据表字段对应,自带验证功能

            if(!$z)
            {
                var_dump($user->getError());
                //exit();
            }

            $res = $user->add();    //数据添加
            if($res)
            {
                echo "sucess";
            }else{
                echo "error";
            }
            //print_r($_POST);
        }else{
        }
        $this->display();
    }
}