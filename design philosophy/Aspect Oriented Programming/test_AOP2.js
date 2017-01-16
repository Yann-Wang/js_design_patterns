/**
 * Created by a_wav on 2016/11/28.
 */
var aop = require('./AOP2');

var a = aop.before(function () {
    console.log(3);
},function () {
    console.log(2);
});

a = aop.before(a, function () {
    console.log(1);
});


a();
