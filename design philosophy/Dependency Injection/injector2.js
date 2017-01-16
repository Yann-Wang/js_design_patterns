/**
 * Created by a_wav on 2016/11/28.
 */

/* 反射方法 */
/*
* 反射是指一个程序在运行时检查和修改一个对象的结构和行为的能力。
* 简单的说，在JavaScript的上下文里，这具体指读取和分析的对象或函数的源代码。
* */

var injector = {
    dependencies: {},
    register: function(key, value) {
        this.dependencies[key] = value;
    },
    resolve: function(deps, func, scope) {
        var args = [];
        var d;
        scope = scope || {};
        for(var i=0; i<deps.length, d=deps[i]; i++) {
            if(this.dependencies[d]) {
                scope[d] = this.dependencies[d];
            } else {
                throw new Error('Can\'t resolve ' + d);
            }
        }
        return function() {
            func.apply(scope || {}, Array.prototype.slice.call(arguments, 0));
        };
    }
};

module.exports = injector;
