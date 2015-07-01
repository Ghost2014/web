/**
 * Created by 墨飞 on 2015/7/1.
 */
//工具方法

/*
 * 1、通过id获取dom
 **/
function getId(id)
{
    return document.getElementById(id);
}
/*
 * 2、通过标签获取dom
 **/
function getEle()
{
    if(arguments.length === 1)
    {
        return document.getElementsByTagName(arguments[0]);
    }else if(arguments.length ===2)
    {
        return document.getElementById(arguments[0]).getElementsByTagName(arguments[1]);
    }
}
