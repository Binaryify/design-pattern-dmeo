// 1.独立的对象 建2个 一个xiaowang 一个xiaoli
// 2.让xiaoli跟xiaowang通过门铃互相通信
// 3.先看一下小wang家有没有门,如果没有门直接通过门铃通讯dididi,如果没有先
// 建门
// 4.两个单例之间开始通信
var xiaowang=(function(argument){
	var xiaowangjia=function(message){
		this.menling=message;
	}
	var men;
	var info={
		sendMessage:function(message){
			if(!men){
				men=new xiaowangjia(message);
			}
			return men;
		}
	}
		return info;
})()
var xiaoli={
	callXiaoming:function(msg){
		var _xw=xiaowang.sendMessage(msg);
		console.log(_xw.menling);
		_xw=null;
	}
}
xiaoli.callXiaoming("dididi") //dididi


// 页面中有6个按钮
//a b c=>top
// d e f=>banner
var top={
	init:function(){
		this.render();
		this.bind();
	},
	a:4,
	render:function(){
		var me=this;
		me.btna=$("#a");
	},
	bind:function(){
		var me=this;
		me.btna.click(function(){
			me.test()
		})
	},
	test:function(){
		a=5;
	}
}
var banner={
	init:function(){
		this.render();
		this.bind();
	},
	a:4,
	render:function(){
		var me=this;
		me.btna=$("#d");
	},
	bind:function(){
		var me=this;
		me.btna.click(function(){
			me.test()
		})
	},
	test:function(){
		top.a=6;
	}
}
top.init();
banner.init();
