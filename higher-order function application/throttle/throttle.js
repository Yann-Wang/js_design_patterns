/**
 * Created by a_wav on 2016/11/28.
 */

var throttle = function (fn, interval) {
    var _self = fn,
        timer,
        firstTime = true;

    return function () {
        var args = arguments,
            _me = this;

        if(firstTime){
            _self.apply(_me,args);
            return firstTime = false;
        }

        if(timer){
            return false;
        }

        timer = setTimeout(function () {
            _self.apply(_me,args);

            clearTimeout(timer); // 其实这两条语句在前在后没关系，因为function执行在javascript是原子的
            timer = null;
        }, interval || 500);

    };
};

var count = 0;

window.onresize = throttle(function () {
    console.log(count++);
}, 500);




