/**
 * Created by ghost on 2015/6/19.
 */
var window_width = 1024;
var window_height = 768;
var radius = 8;
var margin_top = 60;
var margin_left = 30;
var endTime = new Date(2015,5,19,18,47,52);
var curShowTimeSeconds = 0;
var balls = [];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"]
//初始化canvas
var canvas = document.getElementById('canvas');

var context = canvas.getContext('2d');

canvas.width = window_width;

canvas.height = window_height;

curShowTimeSeconds = getCurrentShowTimeSeconds();

draw();
setInterval(function(){
   draw();
   update();
},50);

function draw()
{
    context.clearRect(0,0,1024,768);    //清空画布
    var hours = parseInt(curShowTimeSeconds/3600);
    var minutes = parseInt( (curShowTimeSeconds - hours*3600)/60  );
    var seconds = parseInt( curShowTimeSeconds % 60 );

   // console.log(hours+"小时"+ minutes +"分钟"+ seconds +"秒");
    //时
    renderDigit(margin_left,margin_top,parseInt(hours/10),context);
    renderDigit(margin_left+15*(radius+1),margin_top,parseInt(hours%10),context);
    renderDigit(margin_left+30*(radius+1),margin_top,10,context);
    //分
    renderDigit(margin_left+39*(radius+1),margin_top,parseInt(minutes/10),context);
    renderDigit(margin_left+54*(radius+1),margin_top,parseInt(minutes%10),context);
    renderDigit(margin_left+69*(radius+1),margin_top,10,context);
    //秒
    renderDigit(margin_left+78*(radius+1),margin_top,parseInt(seconds/10),context);
    renderDigit(margin_left+93*(radius+1),margin_top,parseInt(seconds%10),context);

    for( var i = 0 ; i < balls.length ; i ++ ){
        context.fillStyle=balls[i].color;

        context.beginPath();
        context.arc( balls[i].x , balls[i].y , radius , 0 , 2*Math.PI , true );
        context.closePath();

        context.fill();
    }
}

function update()
{
    var nextShowTimeSeconds = getCurrentShowTimeSeconds();

    var nextHours = parseInt( nextShowTimeSeconds / 3600);
    var nextMinutes = parseInt( (nextShowTimeSeconds - nextHours * 3600)/60 );
    var nextSeconds = nextShowTimeSeconds % 60;

    var curHours = parseInt( curShowTimeSeconds / 3600);
    var curMinutes = parseInt( (curShowTimeSeconds - curHours * 3600)/60 );
    var curSeconds = curShowTimeSeconds % 60;

    //if(nextSeconds != curSeconds)
    //{
    //    curShowTimeSeconds = nextShowTimeSeconds;
    //}

    if( nextSeconds != curSeconds ){
        if( parseInt(curHours/10) != parseInt(nextHours/10) ){
            addBalls( margin_left + 0 , margin_top , parseInt(curHours/10) );
        }
        if( parseInt(curHours%10) != parseInt(nextHours%10) ){
            addBalls( margin_left + 15*(radius+1) , margin_top , parseInt(curHours/10) );
        }

        if( parseInt(curMinutes/10) != parseInt(nextMinutes/10) ){
            addBalls( margin_left + 39*(radius+1) , margin_top , parseInt(curMinutes/10) );
        }
        if( parseInt(curMinutes%10) != parseInt(nextMinutes%10) ){
            addBalls( margin_left + 54*(radius+1) , margin_top , parseInt(curMinutes%10) );
        }

        if( parseInt(curSeconds/10) != parseInt(nextSeconds/10) ){
            addBalls( margin_left + 78*(radius+1) , margin_top , parseInt(curSeconds/10) );
        }
        if( parseInt(curSeconds%10) != parseInt(nextSeconds%10) ){
            addBalls( margin_left + 93*(radius+1) , margin_top , parseInt(nextSeconds%10) );
        }

        curShowTimeSeconds = nextShowTimeSeconds;
    }

    updateBalls();
}

function updateBalls(){

    for( var i = 0 ; i < balls.length ; i ++ ){

        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if( balls[i].y >= window_height-radius ){
            balls[i].y = window_height-radius;
            balls[i].vy = - balls[i].vy*0.75;
        }
    }
}

function addBalls( x , y , num ){

    for( var i = 0  ; i < digit[num].length ; i ++ )
        for( var j = 0  ; j < digit[num][i].length ; j ++ )
            if( digit[num][i][j] == 1 ){
                var aBall = {
                    x:x+j*2*(radius+1)+(radius+1),
                    y:y+i*2*(radius+1)+(radius+1),
                    g:1.5+Math.random(),
                    vx:Math.pow( -1 , Math.ceil( Math.random()*1000 ) ) * 4,
                    vy:-5,
                    color: colors[ Math.floor( Math.random()*colors.length ) ]
                }

                balls.push( aBall )
            }
}

function getCurrentShowTimeSeconds()
{
    var curTime = new Date();

    var ret = endTime.getTime() - curTime.getTime();

    ret = Math.round(ret/1000);

    return ret>=0 ? ret : 0;
}

function renderDigit(x,y,num,cxt)
{
    cxt.fillStyle = "rgb(0,102,153)";

    for(var i=0;i<digit[num].length;i++)
    {
        for(var j=0;j<digit[num][i].length;j++)
        {
            if(digit[num][i][j] == 1)
            {
                cxt.beginPath();
                cxt.arc(x+j*2*(radius+1)+(radius+1),y+i*2*(radius+1)+(radius+1),radius,0,2*Math.PI);
                cxt.closePath();
                cxt.fill();
            }
        }
    }
}

