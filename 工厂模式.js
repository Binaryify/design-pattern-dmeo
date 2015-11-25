//工厂应该有厂长,来决定运行哪条生产线
// 消费者->子类
var gongchang={};//定义工厂
//工厂生产衣服方法
gongchang.chanyifu=function(argument){
	this.gongren=50; //工人属数量
	this.shengchangxiaolv=2;//生产效率
	console.log("我们有"+this.gongren+"个工人");
	console.log("生产了"+this.gongren*this.shengchangxiaolv+"件衣服")
}
//工厂生产鞋子方法
gongchang.chanxie=function(){
	console.log("产鞋子");
}
gongchang.yunshu=function(){
	console.log("运输");
}
gongchang.changzhang=function(para){
	return new gongchang[para]();
}
var me=gongchang.changzhang('chanyifu');