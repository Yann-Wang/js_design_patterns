/**
 * Created by a_wav on 2016/11/29.
 */

var Aspects = function () {};

/*
 * pointcut: 织入点对象
 * target:被织入的对象
 * method:被织入的方法名字
 * advice: 通知函数
 * */
Aspects.prototype = {
    before: function (target, method, advice) {
        var original = target[method];
        target[method] = function () {
            (advice)();
            original.apply(target, arguments);
        };
        return target;
    },
    after: function (target, method, advice) {
        var original = target[method];
        target[method] = function () {
            original.apply(target, arguments);
            (advice)();
        };
        return target;
    },
    around: function (target, method, advice) {
        var original = target[method];
        target[method] = function () {
            (advice)();
            original.apply(target, arguments);
            (advice)();
        };
        return target;
    }
};

module.exports = Aspects;





