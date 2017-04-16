//创建一个游戏
var mygame = new Phaser.Game(400,720,Phaser.AUTO,'game_div');
//创建一个游戏状态
var game_state = {};

game_state.main = function(){};

game_state.main.prototype = {
	//预加载
	preload:function() {
		this.game.load.image('bg','img/background.png');
		this.game.load.image('bird','img/bird_blue_0.png');
		this.game.load.image('pipe','img/pipe.png');
		this.game.load.audio('bgmusic','MP3/game.mp3');
		this.game.load.audio('failed','MP3/failed.wav');
		this.game.load.audio('jump','MP3/jumpp.mp3');
	},
	
	create:function(){
		this.game.add.sprite(0,0,'bg');
		this.bird = this.game.add.sprite(100,245,'bird');
		//给小鸟添加重力
		this.bird.body.gravity.y = 1000;
		//找到空格键
		var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		
		space_key.onDown.add(this.jump,this);
		
		this.pipes = this.game.add.group();
		this.pipes.createMultiple(20,'pipe');
		
		//定时器
		this.timer = this.game.time.events.loop(1500,this.add_rowpipes,this);
		
		this.restart_game_sound = this.game.add.audio('failed');
		this.jump_sound = this.game.add.audio('jump');
		this.game_sound = this.game.add.audio('bgmusic');
		
		this.game_sound.play();
		
		this.score = 0;
		this.label_score = this.game.add.text(20,20,"0",{font:"30px Arial",fill:"#ffffff"});
		
	},
	jump:function(){
		this.jump_sound.play();
		this.bird.body.velocity.y = -350;
	},
	//一秒60次
	update:function(){
		if (this.bird.inWorld == false) {
			//重新开始游戏    自定义
			this.restart_game();
		}
		//如果小鸟撞到任意一个管道
		this.game.physics.overlap(this.bird,this.pipes,this.restart_game,null,this);
		
	},
	restart_game:function(){
		this.game_sound.stop();
		
		this.restart_game_sound.play();
		
		//移除定时器
		this.game.time.events.remove(this.timer);
		this.game.state.start('main');
	},
	add_rowpipes:function(){
		var num = Math.floor(Math.random()*5)+1;
		for(var i=0;i<11;i++){
//			if (i!=num && i!=num+1 && i!=num+2) {  //简单测试版  空三个
			if (i!=num && i!=num+1 && i!=num+2) {
				//取出一个
				var pipe = this.pipes.getFirstDead();
				//设置位置
				pipe.reset(400,i*60+10);
				
				//添加向左的加速度
				pipe.body.velocity.x = -200;
				
				//杀死
				pipe.outOfBoundsKill = true;
			}
		}
		this.label_score.content = this.score;
		this.score += 1;
	}
}

//添加并开始游戏
mygame.state.add('main',game_state.main);
mygame.state.start('main');
