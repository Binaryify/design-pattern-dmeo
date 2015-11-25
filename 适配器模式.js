function pp(){
	this.test=function(){
		console.log("test")
	}
}

pp.prototype.gogo=function(){
	console.log("gogo")
}
function shipeiqi(){
	var s=new pp();
	var aa={
		test:function(){
			s.test()
		},
		gogo:function(){
			s.gogo()
		}
	}
	return aa;
}
var aa=shipeiqi();
aa.test(); //test