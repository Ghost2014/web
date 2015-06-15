/**
 * Created by ghost on 2015/6/15.
 */
app.controller('init',['$scope',function($scope){
    $scope.info = "欢迎访问在线图书馆";
}])

app.controller('wxmz',['$scope',function($scope){
    $scope.bookList = [
        {id:1,name:'北冥神功',href:'.bmsg'},
        {id:2,name:'凌波微步',href:'.lbwb'},
        {id:3,name:'六脉神剑',href:'.lmsj'},
        {id:4,name:'一阳指',href:'.yyz'},
        {id:5,name:'降龙十八掌',href:'.xlsbz'},
        {id:6,name:'天山六阳掌',href:'.tslyz'},
    ]
}])

app.controller('wlxs',['$scope',function($scope){
    $scope.bookList = [
        {id:1,name:'nodeJs',href:'nodeJs'},
        {id:2,name:'PHP',href:'php'},
        {id:3,name:'mysql',href:'mysql'},
        {id:4,name:'JavaScript',href:'javascript'},
        {id:5,name:'python',href:'python'},
        {id:6,name:'html5',href:'html5'},
    ]
}])

app.controller('bmsg',['$scope',function($scope){
    $scope.type="bmsg";
}]);

app.controller('lbwb',['$scope',function($scope){
    $scope.type="lbwb";
}]);

app.controller('lmsj',['$scope',function($scope){
    $scope.type="lmsj";
}]);

app.controller('yyz',['$scope',function($scope){
    $scope.type="yyz";
}]);

app.controller('xlsbz',['$scope',function($scope){
    $scope.type="xlsbz";
}]);

app.controller('tslyz',['$scope',function($scope){
    $scope.type="tslyz";
}]);
