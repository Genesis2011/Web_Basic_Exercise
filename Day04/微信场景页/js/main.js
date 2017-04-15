//当前显示页面   默认为第0页
var nowpage = 0;

//方法
$(document).ready(function(){
	//每一页设置宽和高  content
	//获取到屏幕的宽和高
	var width = window.innerWidth;
	var height = window.innerHeight;
	
	//最外盒子的宽和高赋值
	$(".content").width(width);
	$(".content").height(4*height);
	//每一页的宽和高
	$(".page").width(width);
	$(".page").height(height);
	
	//触控监听
	$(".content").swipe({
		//重新实现
		//事件、方向、距离、触控时间、触控点个数
		swipe:function(event,direction,distance,duration,fingerCount){
			//往上滑动
			if(direction=="up"){
				nowpage++;
			}
			else if(direction=="down"){
				nowpage--;
			}
			
			if(nowpage>3){
				nowpage=3;
			}
			if(nowpage<0){
				nowpage=0;
			}
			
			$(".content").animate(
				{top:nowpage*-100+"%"},
				
				{duration:500,complete:otherAnimate()}
			);
		}
	});
	
	//第一页，楼淡入  飞机宽度增加
	$(".page1-building").fadeIn(2000,function(){
		$(".page1-person").animate(
			{width:'70%'},
			{duration:2000}
		);
	});
	
});


function otherAnimate(){
	if (nowpage==1) {
		//淡入动画  fadeIn淡入   function淡入结束之后执行
		$(".page2-bg").fadeIn(2000, function() {
			$(".page2-pass1").fadeIn(2000,function(){
				$(".page2-pass2").fadeIn(2000);
			});
			
		});
	}
	if (nowpage==2) {
		$(".page3-bus").animate({left:'-100%'},{duration:2000});
		
		$(".page3-me").animate({right:'50%'},{duration:3000,complete:function(){
			$(".page3-station").fadeOut("slow");
			$(".page3-me").fadeOut("slow",function(){
				$(".page3-wall").fadeIn(2000);
				$(".page3-cry").fadeIn(2000);
				$(".page3-space").animate({width:'30%'},{duration:1000,complete:function(){
					//在哪里
					$(".page3-where").animate({width:'60%'},{duration:1000});
				}});
				
			});
						
		}});
	}
}

//灯一被点击就会调用这个方法
function liang(image){
	image.src = "img/lightOn.png";
	
	$(".page4-bg").fadeOut("slow");
	$(".page4-title").fadeOut("slow");
	$(".page4-click").fadeOut("slow",function(){
		
		//场景二开始淡入
		$(".page4-onbg").fadeIn("slow");
		$(".page4-wky").fadeIn("slow");
		
	});
}

function PlayPause (musicbtn) {
	var player = document.getElementById("musicPlayer");
	//如果暂停中
	if (player.paused) {
		//调用play方法
		player.play()
		musicbtn.src = "img/musicBtn.png";
	} else{
		//暂停
		player.pause();
		musicbtn.src = "img/musicBtnOff.png";
	}
}
