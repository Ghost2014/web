<?php
/**
 * Created by PhpStorm.
 * User: ghost
 * Date: 2015/6/24
 * Time: 15:05
 */

namespace Home\Controller;

use Think\Controller;

class WatchController extends Controller {
    public function w_list()
    {
        $title = "喵星人围观了";

        $this->assign('title',$title);

        $this->display();
    }

    public function forthwith()
    {
        echo "fasdfasfdsd";
    }
}