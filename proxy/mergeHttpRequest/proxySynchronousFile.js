/**
 * Created by a_wav on 2017/1/15.
 */

var proxy = function (fn) {
    var cache = [],
        timer;

    return function (id) {
        cache.push(id);
        if(timer){
            return;
        }
        timer = setTimeout(function () {
            fn(cache.join(',')); // 2秒后向本体发送需要同步的ID集合
            clearTimeout(timer); // 清空定时器
            timer = null;
            cache.length = 0; // 清空ID集合
        },2000);
    };
};