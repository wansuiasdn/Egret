//背景图片调整
var screenH = ''
var screenW =''
screenW=$(window).width()
screenH=$(window).height()
$('.bgbox').css({'height':screenH+'px'})
$('.mask').css({'height':screenH*2+'px'})
console.log(screenH)
$(window).resize(function(){
	screenH=$(window).height()
	$('.bgbox').css({'height':screenH+'px'})
	$('.mask').css({'height':screenH+'px'})
})
//背景遮罩动态
changeMask()
function changeMask()
{
	if($('.mask').css('width')==screenW*2+'px')
	{	
		$('.mask').css({'width':'100%','height':'100%'})
		console.log('a')
		setTimeout("changeMask()",3000)
	}else
	{
		$('.mask').css({'width':'200%','height':'200%'})
		console.log('b')
		setTimeout("changeMask()",3000)
	}

}


//控制打字效果
var i =0;
let str = ['WE ARE CREATOR','Egret','POWERFUL AND STRONGER'];//设置需要打印的文字信息
let strs ='';
var j =0;
xhvalue();
function xhvalue() //遍历所有文字
{
	
	if(j<str.length)
	{
		strs = str[j];
		
		typing()
	}
}

function typing(){ //打印文字
	
	if(i<=strs.length)
	{
		
		$('.bgbox>div>p').text(strs.slice(0,i++))
		setTimeout("typing()",150)//设置文字逐个打印时间
	}else
	{
		setTimeout("extype()",4000)//设置文字显示时间
	}
}

function extype() //删除文字
{
	if(i>0)
	{
		$('.bgbox>div>p').text(strs.slice(0,i--))
		setTimeout("extype()",70)//设置文字逐个删除时间
	}else
	{
		if(j<str.length-1)
		{
			j++
			xhvalue()
		}else
		{
			j=0
			xhvalue()
		}
	}
}
//ipt聚焦tips弹出
$('.iptbox input:first').focusin(function(){
	$('.usertips').css({'display':'block'})
})
$('.iptbox input:last').focusin(function(){
	$('.pwdtips').css({'display':'block'})
})
$('.iptbox input:first').focusout(function(){
	$('.usertips').css({'display':'none'})
})
$('.iptbox input:last').focusout(function(){
	$('.pwdtips').css({'display':'none'})
})