/**
 * Created by a_wav on 2017/1/15.
 */

var proxyMiniConsole = function(cache){
    cache = cache || [];

    return {
        log: function () {
            var args = arguments;
            cache.push(function () {
                return miniConsole.log.apply(miniConsole,args);
            });
        }
    };
};
