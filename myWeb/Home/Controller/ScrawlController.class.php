<?php
/**
 * Created by PhpStorm.
 * User: ghost
 * Date: 2015/6/24
 * Time: 15:10
 */

namespace Home\Controller;

use Think\Controller;

class ScrawlController extends Controller {
    public function s_list()
    {
        $title = "看看喵星人的涂鸦吧";

        $this->assign('title',$title);

        $this->display();
    }

    public function wpk()
    {
        echo "出来啊";
    }
}