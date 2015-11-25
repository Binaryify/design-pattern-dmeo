//老板
function laoban(xiangmujingli) {
	if(xiangmujingli){
		this.xiangmujingli=xiangmujingli;
	}
}
laoban.prototype.write=function(todo){
	this.xiangmujingli.write(todo)
}
//项目经理
function xiangmujingli(coder){
	if(coder){
		this.coder=coder;
	}
}
xiangmujingli.prototype.write=function(todo){
	this.coder.write(todo);
}
// 程序员
function coder(todo){}

coder.prototype.write=function(todo){
	console.log("coding..."+todo);
}
//begin发起coder来结束
var begin=new laoban(new xiangmujingli(new coder()))
begin.write("php")