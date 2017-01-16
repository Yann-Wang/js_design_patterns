/**
 * Created by a_wav on 2016/11/27.
 */

Function.prototype.before = function (beforefn) {
    var _self = this;
    //console.log(this === global);
    return function () {
        //console.log(this === global); // true
        beforefn.apply(this, arguments); // 执行新函数，修正this
        return _self.apply(this, arguments);
    };
};

Function.prototype.after = function (afterfn) {
    var _self = this;
    return function () {
        var ret = _self.apply(this, arguments);
        afterfn.apply(this, arguments);
        return ret;
    };
};

//环绕型
Function.prototype.around = function(beforeFunc, afterFunc) {
    var that = this;
    var args = [].slice.call(arguments,1);
    return function() {
        return that.before(beforeFunc).after(afterFunc).apply(this, args);
    };
};

//捕获异常
Function.prototype.throwing = function(throwingFunc) {
    var that = this;
    var args = [].slice.call(arguments,1);
    return function() {
        try {
            return that.apply(this, arguments);
        } catch(e) {
            throwingFunc && throwingFunc.call(this, e, args);
        }
    };
};



