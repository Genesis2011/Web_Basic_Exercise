//当页面加载完成之后执行
$(document).ready(function() {
	//淡入动画  fadeIn淡入   function淡入结束之后执行
	$(".page2-bg").fadeIn(2000, function() {
		$(".page2-pass1").fadeIn(2000,function(){
			$(".page2-pass2").fadeIn(2000);
		});
		
	});

});