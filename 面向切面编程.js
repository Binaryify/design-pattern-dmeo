/**
 * 统计当前函数耗时时长
 * @return {[type]} [description]
 */
function test(){
  console.log("2")
  return "my test";
}
Function.prototype.before=function(fn){
  var __self=this;
  return function(){
    // this指向了调用的函数
    if(fn.apply(this,arguments)==false){
      return false;
    };
      return __self.apply(__self,arguments);
  }
}
Function.prototype.after=function(fn){
  //after先执行本身this再回调
  var __self=this;
  return function(){
    var result=__self.apply(__self,arguments)
    if(result==false){
      return false;
    }
    fn.apply(this,arguments);
    return result;
  }
}
//before回调和before一起被送到after去
//after回调,before和test一起送到beform去
//挂载,self=>test 执行before回调 执行self after自己执行回调
test.after(function(){
  console.log(3)

}).before(function(){
  console.log(1)
  // return false;
})()
