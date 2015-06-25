<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index()
    {
        $title = "我是喵星人";
        $this->assign('title',$title);
        $this->display();
    }

    //login
    public function login()
    {
        $this->display();
    }

    //register
    public function register()
    {
        if(!empty($_POST))
        {
            print_r($_POST);
        }else{
            $this->display();
        }
    }
}