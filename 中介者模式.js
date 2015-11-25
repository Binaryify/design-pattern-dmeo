var feiji=function(name){
  this.name=name;
}
feiji.prototype.send=function(msg,to){
  console.log(this.name+"发送了信息")
  tatai.send(msg,to)
}
feiji.prototype.jieshou=function(msg){
  console.log(this.name+"[接收到]"+msg)
}
var tatai={
  all:{},
  zhuce:function(f){
    this.all[f.name]=f;
  },send:function(msg,to){
    this.all[to.name].jieshou(msg)
  }
}
var feiji1=new feiji("feiji1");
var feiji2=new feiji("feiji2");
tatai.zhuce(feiji1);
tatai.zhuce(feiji2);
feiji1.send('我马上降落,还有200米',feiji2)
//feiji1发送了信息
//feiji2[接收到]我马上降落,还有200米
