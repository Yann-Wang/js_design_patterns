/**
 * Created by a_wav on 2016/11/28.
 */

var before = function (fn, beforefn) {
    return function () {
        beforefn.apply(this, arguments);
        return fn.apply(this, arguments);
    };
};

var after = function (fn, afterfn) {
    return function () {
        var ret = fn.apply(this, arguments);
        afterfn.apply(this, arguments);
        return ret;
    };
};

exports.before = before;
exports.after  = after;
