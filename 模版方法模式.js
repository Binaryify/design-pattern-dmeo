var Beverage=function(){}
Beverage.prototype.boilWater=function(){
	console.log("把水煮沸");
}
Beverage.prototype.brew=function(){
	throw new Error("子类必须重写brew方法")
}
Beverage.prototype.pourInCup
=function(){
	throw new Error("子类必须重写pourInCup方法")
}
Beverage.prototype.addCondiments=function(){
	throw new Error("子类必须重写addCondiments方法")
}
Beverage.prototype.customerWantsCondiments=function(){
	return true; //默认需要饮料
}
Beverage.prototype.init=function(){
	this.boilWater();
	this.brew();
	this.pourInCup();
	if(this.customerWantsCondiments()){
		this.addCondiments();
	}
}
var Coffee=function(){}
Coffee.prototype=new Beverage();
Coffee.prototype.brew=function(){
	console.log("用沸水煮咖啡");
}
Coffee.prototype.pourInCup=function(){
	console.log("把咖啡倒进杯子");
}
Coffee.prototype.addCondiments=function(){
	console.log("加糖和牛奶");
}
Beverage.prototype.customerWantsCondiments=function(){
	return window.confirm("请问要加调料吗?");
}
var Coffee=new Coffee();
Coffee.init()

