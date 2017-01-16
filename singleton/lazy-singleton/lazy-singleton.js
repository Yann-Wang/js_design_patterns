/**
 * Created by a_wav on 2017/1/12.
 */

var getSingle = function (fn) {
    var result;
    return function () {
        return result || (result = fn.apply(this, arguments));
    };
};

