// 原型
var myobj={
  str:"mystring",
  num:1,
  myarr:[30,{
    arrgo:"i am arr"
  }],
  obj:{
    innerobj:{
      test:25
    },
    innerstr:"myobjInnerstr"
  }
}
// // 浅拷贝
// function clone(obj){
//   var ret={};
//   for(k in obj){
//     ret[k]=obj[k];
//   }
//   return ret;
// }
//
// var result=clone(myobj);
// result.obj.innerstr="outter";
// console.log(result);
// console.log(myobj)
// //此时会发现修改了result也会导致myobj受到影响
//
// // 深拷贝
// function clone(obj){
//   var ret,k,b;
//   if((b=(obj instanceof Array))||obj instanceof Object){
//     ret=b?[]:{};
//     for(k in obj){
//       if((obj[k] instanceof Array||obj[k] instanceof Object)){
//         ret[k]=clone(obj[k]);
//       }else{
//         ret[k]=obj[k];
//       }
//
//     }
//   }
//   return ret;
// }
// var result=clone(myobj);
// result.obj.innerstr="outter";
// console.log(result);
// console.log(myobj)
function myobjfn(){}
myobjfn.prototype=myobj;
function result(){}
result.prototype=Object.create(myobjfn.prototype);
var _result=new result()
_result.str="111";
console.log(myobj);
console.log(_result)
