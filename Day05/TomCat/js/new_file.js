var timer;

window.onload = function() {
	
	
	//1.左上角按钮添加点击方法
	document.getElementById("cymbal").onclick = function() {
		TomstartAni(13,"cymbal")
	}
	//.按钮添加点击方法
	document.getElementById("drink").onclick = function() {
		TomstartAni(81,"drink")
	}
	//.按钮添加点击方法
	document.getElementById("eat").onclick = function() {
		TomstartAni(40,"eat")
	}
	//.按钮添加点击方法
	document.getElementById("fart").onclick = function() {
		TomstartAni(28,"fart")
	}
	//.按钮添加点击方法
	document.getElementById("pie").onclick = function() {
		TomstartAni(24,"pie")
	}
	//.按钮添加点击方法
	document.getElementById("scratch").onclick = function() {
		TomstartAni(56,"scratch")
	}
	
}

//封装
function TomstartAni(num,name){
	//初始化定时器
		clearInterval(timer);
		//猫换图片
		var cat = document.getElementById("cat");

		var index = 0;
		//定时器   每隔多久就做一件事
		timer = setInterval(function() {
			index++;
			if(index < num) {
				if(index < 10) {
					index = "0" + index;
				}
			cat.src = "Tom/Animations/"+name+"/"+name+"_" + index + ".jpg";
			}
			else{
				//清楚定时器
				clearInterval(timer);
			}
		}, 80);
}
