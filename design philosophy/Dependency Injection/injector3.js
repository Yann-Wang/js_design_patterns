/**
 * Created by a_wav on 2016/11/28.
 */

/*RequireJS / AMD的方法*/

var injector = {
    dependencies: {},
    register: function(key, value) {
        this.dependencies[key] = value;
    },
    resolve: function(deps, func, scope) {
        var args = [],d;
        for(var i=0; i<deps.length, d=deps[i]; i++) {
            if(this.dependencies[d]) {
                args.push(this.dependencies[d]);
            } else {
                throw new Error('Can\'t resolve ' + d);
            }
        }
        return function() {
            func.apply(scope || {}, args.concat(Array.prototype.slice.call(arguments, 0)));
        };
    }
};

module.exports = injector;



