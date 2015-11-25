var lian={};
lian.paobing=function(pao_num){
	console.log(pao_num+"炮"+"开始战斗");
}
lian.bubing=function(bubing_num){
	console.log(bubing_num+"人"+"开始战斗")
}
lian.lianzhang=function(mingling){
	lian[mingling.type](mingling.num)
}
lian.lianzhang({
	type:"paobing",
	num:"100"
})
lian.lianzhang({
	type:"bubing",
	num:"50"
})