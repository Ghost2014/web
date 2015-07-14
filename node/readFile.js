/**
 * Created by Ghost2015 on 2015/7/13.
 */
var fs = require('fs');

fs.readFile('test.txt','utf-8', function (err,data) {
    if(err)
    {
        console.error(err);
    }else{
        console.log(data);
    }
});

console.log('end.');
