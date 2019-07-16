// 动态控制首页的背景下方高度
let screenH=$(window).height();
let screenW = $(window).width();
var aheight ="";
$('.vediobox').css({'height':screenH})
$(window).resize(function(){
	let screenH=$(window).height();
	$('.vediobox').css({'height':screenH})
})
// $('.main').css({'margin-top':screenH})
$(window).on('scroll',function(){
	aheight = $(document).scrollTop();
	let fix = $(document).scrollTop()/9
	let fix2 = $(document).scrollTop()/4
	let cha =$(window).height()-$(document).scrollTop();
	$('video').css({'transform':'matrix(1,0,0,1,0,'+(-fix)+')'})
	$('.title').css({'transform':'matrix(1,0,0,1,0,'+(-fix2)+')','opacity':''+(1-fix/50)+''})

	if($(window).height()-$(document).scrollTop()<=120)
	{
		$('.headerbox').css({'background-color':'#000'})
		$('.backtop').css({'opacity':120-cha})
		
		
	}else
	{
		$('.headerbox').css({'background-color':'rgba(0,0,0,0)'})
		$('.backtop').css({'opacity':120-cha})
	}
	if(cha<150)
	{
		$('.backtop').css({'display':'block'})
	}
	if(cha>200)
	{
		$('.backtop').css({'display':'none'})
	}
})
//向上跳按钮
$('.backtop').click(function(){
	var interval=setInterval(function(){
		$(document).scrollTop(aheight-50);
		if(aheight<=0)
		{
			clearInterval(interval);
		}
	},10)
	
})


//控制选中打字效果
var i =0;
let str = [' Egret',' Wing',' DragonBones Pro'];//设置需要打印的文字信息
let strs ='';
var j =0;
xhvalue();
function xhvalue() //遍历所有文字
{
	
	if(j<3)
	{
		strs = str[j];
		
		typing()
	}
}

function typing(){ //打印文字
	
	if(i<=strs.length)
	{
		
		$('.title span span').text(strs.slice(0,i++))
		setTimeout("typing()",150)//设置文字逐个打印时间
	}else
	{
		$('.title span span').addClass("animated-typeing")
		setTimeout("extype()",4000)//设置文字显示时间

	}
}

function extype() //删除文字
{
	if(i>0)
	{
		$('.title span span').text(strs.slice(0,i--))
		setTimeout("extype()",70)//设置文字逐个删除时间
	}else
	{
		$('.title span').removeClass("animated-typeing")
		if(j<2)
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
//设置canvas宽高
function setwh()
{
	var mainH=$('.main').height();
	console.log(mainH)
	$('#Mycanvas').attr({'width':screenW,'height':mainH})
}
setwh();//设置canvas宽高