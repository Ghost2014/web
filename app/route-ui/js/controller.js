/**
 * Created by ghost on 2015/6/16.
 */
app.controller('tpl1_ctrl',['$scope',function($scope){
    $scope.aside = [
        {id:1,href:'tpl1.list1',name:'海啸坦克'},
        {id:2,href:'tpl1.list2',name:'波能坦克'},
        {id:3,href:'tpl1.list3',name:'天狗机器人'},
        {id:4,href:'tpl1.list4',name:'超级要塞'},
    ]
}])

app.controller('tpl2_ctrl',['$scope',function($scope){
    $scope.aside = [
        {id:1,href:'tpl2.list1',name:'世纪轰炸机'},
        {id:2,href:'tpl2.list2',name:'维和战斗机'},
        {id:3,href:'tpl2.list3',name:'雅典娜战车'},
        {id:4,href:'tpl2.list4',name:'航空母舰'},
    ]
}])

app.controller('tpl3_ctrl',['$scope',function($scope){
    $scope.aside = [
        {id:1,href:'tpl3.list1',name:'娜塔莎特种兵'},
        {id:2,href:'tpl3.list2',name:'牛蛙战车'},
        {id:3,href:'tpl3.list3',name:'天启坦克'},
        {id:4,href:'tpl3.list4',name:'库列夫潜艇'},
    ]
}])