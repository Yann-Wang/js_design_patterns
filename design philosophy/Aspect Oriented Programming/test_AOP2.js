/**
 * Created by a_wav on 2016/11/28.
 */
var aop = require('./AOP2');

var a = function() {
    console.log('here');
}

a = aop.before(a,function () {
    console.log(1);
});

a = aop.after(a, function () {
    console.log(2);
});


a();
