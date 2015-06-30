<?php
/**
 * Created by PhpStorm.
 * User: ghost
 * Date: 2015/6/30
 * Time: 10:37
 */

namespace Home\Controller;


use Think\Controller;

class AboutController extends Controller{
   public function a_list()
   {
       $title = "关于积微坊";
       $about = "active";
       $this->assign('title',$title);
       $this->assign('about',$about);
       $this->display();
   }
}