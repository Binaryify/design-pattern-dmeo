//代理模式需要3方
//1.买家
function maijia(name){
	this.name=name;
}
// 2.中介 卖房
function zhongjie(){
}
zhongjie.prototype.maifang=function(){
	new fangdong(new maijia("小黄")).maifang('20万');
}
// 3.房东 坐等收钱
function fangdong(maijia){
	this.maijia_name=maijia.name;
	this.maifang=function(money){
		console.log("收到了来自["+this.maijia_name+"]"+money+"人民币");
	}
}
(new zhongjie).maifang();//收到了来自[小明]20万人民币