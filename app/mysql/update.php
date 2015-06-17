<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>在线图书馆</title>
    <link rel="stylesheet" href="../../lib/bootsrap/css/bootstrap.css"/>
</head>
<body>
<?php
    include_once 'public/header.php';
    $id = $_GET['id'];

    require_once('public/mysql.class.php');

    mysql_select_db('book',$link);

    mysql_query('set names utf8');

    $sql = "update book_list set book_name='fds',book_list='李四' where id = $id ";

    $res = mysql_query($sql,$link);

    if(!$res)
    {
        die('数据跟新失败'.mysql_error());
    }

    $sq12 = "select * from book_list where id = $id;";

    $result = mysql_query($sq12,$link);

    while($row = mysql_fetch_assoc($result)) {
        ?>
        <div class="container">
            <form class="form-horizontal" method="post" action="update.php">
                <div class="control-group">
                    <label class="control-label" for="inputEmail" value="<?php echo $row['book_name']?>">书名</label>

                    <div class="controls">
                        <input type="text" name="bookname">
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="inputPassword">作者</label>

                    <div class="controls">
                        <input type="text" name="writer">
                    </div>
                </div>
                <div class="control-group">
                    <div class="controls">
                        <button type="submit" class="btn">确定</button>
                    </div>
                </div>
            </form>
        </div>
    <?php
    }
    ?>
</body>
</html>