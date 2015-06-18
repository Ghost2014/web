/**
 * Created by ghost on 2015/6/18.
 */
app.service("appService",['$http','$filter', function ($http,$filter) {
   this.htmlAside = [
       {title:'HTML简介',sref:'html.0'},
       {title:'HTML基础',sref:'html.1'},
       {title:'HTML元素',sref:'html.2'},
       {title:'HTML标题',sref:'html.3'},
       {title:'HTML段落',sref:'html.4'},
       {title:'HTML链接',sref:'html.5'},
   ]
}]);
