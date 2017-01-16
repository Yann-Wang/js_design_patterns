/**
 * Created by a_wav on 2017/1/15.
 */
var proxy = require('./proxyMult');

var mult = function () {
    console.log('开始计算乘积: ');
    var a = 1;
    for(var i=0,l=arguments.length;i<l;i++){
        a = a*arguments[i];
    }

    return a;
};

var proxyMult = proxy(mult);

console.log(proxyMult(1,2,3,4));
console.log(proxyMult(1,2,3,4,5));