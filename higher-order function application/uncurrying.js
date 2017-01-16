/**
 * Created by a_wav on 2016/11/27.
 */

Function.prototype.uncurrying = function () {
    var self = this;
    return function () {
        // 鸭式变型： 因为类数组对象像数组，所以可以使用数组的方法
        var obj = Array.prototype.shift.call(arguments);
        return self.apply(obj, arguments);
    };
};

/**
 * 当我们调用对象的某个方法时，其实不用去关心该对象原本是否被设计为拥有这个方法
 */
var push = Array.prototype.push.uncurrying();

(function () {
    push(arguments, 4);
    console.log(arguments);  // 输出 { '0': 1, '1': 2, '2': 3, '3': 4 }
})(1,2,3);
