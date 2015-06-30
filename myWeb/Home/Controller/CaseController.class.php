<?php
/**
 * Created by PhpStorm.
 * User: ghost
 * Date: 2015/6/24
 * Time: 15:05
 */

namespace Home\Controller;

use Think\Controller;

class CaseController extends Controller {
    public function c_list()
    {
        $title = "喵星人围观了";
        $case = "active";
        $this->assign('title',$title);
        $this->assign('case',$case);
        $this->display();
    }

    public function forthwith()
    {
        echo "fasdfasfdsd";
    }
}