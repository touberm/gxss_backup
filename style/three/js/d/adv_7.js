
var Adv_range_7="1";
var EndDate_7="2018/02/10";
var Dt_7=new Date();
var NowDate_7=Dt_7.getFullYear()+"/"+(Dt_7.getMonth()+1)+"/"+Dt_7.getDate();
if(Date.parse(EndDate_7)-Date.parse(NowDate_7)<0) 
{
 Adv_range_7="0";
} 
else if(Adv_range_7=="1" && IsPageHome!="1")
{
 Adv_range_7="0";
}
else if(location.href.indexOf("/e/")>0) 
 {
 Adv_range_7="0";
 }

document.write("<div id='adv_7' style='display:none;position:absolute;left:0px;top:0px;z-index:100'>按时打算打算打算多</div>");
var adv_7=document.getElementById("adv_7");
var floatdelay7=25; //控制每次执行间隔的时间，做越大移动得越慢；
var floatspeed =1; //控制每次执行移动的距离，值越大移动得越快；
var floatflagX7 =0;
var floatflagY7 =0;
function toPixel7(str1) 
{
 var oldLen = str1.length;
 var newLen = oldLen - 2;
 str2 = str1.slice(0, newLen);
 str3 = parseInt(str2);
 return str3;
}
function flowAdv7(){
var bWidth = document.body.clientWidth;
var bHeight = document.body.clientHeight;
var bLeft = document.body.scrollLeft;
var bTop = document.body.scrollTop;
var iWidth = adv_7.offsetWidth;
var iHeight = adv_7.offsetHeight;
var iLeft = toPixel7(adv_7.style.left);
var iTop = toPixel7(adv_7.style.top);
if(iLeft < (bWidth - iWidth) && floatflagX7 == 0) {
adv_7.style.left = (iLeft + floatspeed) + "px";
}
else if(iLeft >= (bWidth - iWidth) && floatflagX7 ==0) {
floatflagX7 = 1;
}
else if(iLeft > 0 && floatflagX7 == 1) {
adv_7.style.left = (iLeft - floatspeed) + "px";
}
else if(0 >= iLeft && floatflagX7 == 1) {
floatflagX7 = 0;
}
if(iTop < (bHeight - iHeight) && floatflagY7 == 0) {
adv_7.style.top = (iTop + floatspeed) + "px";
}
else if(iTop >= (bHeight - iHeight) && floatflagY7 ==0) {
floatflagY7 = 1;
}
else if(iTop > 0 && floatflagY7 == 1) {
adv_7.style.top = (iTop - floatspeed) + "px";
}
else if(0 >= iTop && floatflagY7 == 1) {
floatflagY7 = 0;
}
}
function startflowAdv7()
{
adv_7.style.left =Math.floor(Math.random()*1000)+"px";
adv_7.style.display="block";
var floatinterval7 = setInterval("flowAdv7()", floatdelay7);
adv_7.onmouseover = function() {clearInterval(floatinterval7);}
adv_7.onmouseout = function() {floatinterval7 = setInterval("flowAdv7()", floatdelay7);}
}
if(Adv_range_7!="0"){setTimeout('startflowAdv7()',Math.floor(Math.random()*1000));}
