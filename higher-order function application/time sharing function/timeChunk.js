/**
 * Created by a_wav on 2016/11/28.
 */

var timeChunk = function (ary, fn, count) {
    var obj,t;
    var len = ary.length;
    var start = function () {
        for(var i=0;i<Math.min(count || 1,ary.length); ++i){
            var obj = ary.shift();
            fn(obj);
        }
    };

    return function () {
        t = setInterval(function () {
            if(ary.length === 0){
                return clearInterval(t);
            }
            start();
        }, 200);
    };
};


