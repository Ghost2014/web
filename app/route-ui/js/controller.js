/**
 * Created by ghost on 2015/6/18.
 */
app.controller('html',['$scope','appService',function($scope,appService){
    $scope.title = "html";
    $scope.nav = appService.htmlAside;
}]);

app.controller('javascript',['$scope',function($scope){
    $scope.title = "javascript";
}]);

app.controller('php',['$scope',function($scope){
    $scope.title = "php";
}]);

app.controller('mysql',['$scope',function($scope){
    $scope.title = "mysql";
}]);

app.controller('java',['$scope',function($scope){
    $scope.title = "java";
}]);
