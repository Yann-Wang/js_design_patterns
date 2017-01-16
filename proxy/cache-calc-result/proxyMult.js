/**
 * Created by a_wav on 2017/1/15.
 */

var proxy = function (mult) {
    var cache = {};
    return function () {
        var args = Array.prototype.join.call(arguments,',');
        if(args in cache){
            return cache[args];
        }
        return cache[args] = mult.apply(this,arguments);
    };
};

module.exports = proxy;