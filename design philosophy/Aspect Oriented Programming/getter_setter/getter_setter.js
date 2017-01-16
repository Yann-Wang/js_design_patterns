/**
 * Created by a_wav on 2016/11/27.
 */
var Stateful = (function(){
    'use strict';

    var attributes = {};

    function _getNameAttrs(name){
        return attributes[name] || {};
    }

    function _setNameAttrs(name) {
        if (!attributes[name]) {
            attributes[name] = {
                s: '_' + name + 'Setter',
                g: '_' + name + 'Getter'/*,
                 wcbs: []*/
            };
        }
    }

    function _setNameValue(name, value){
        if (name === '_watchCallbacks') {
            return;
        }
        _setNameAttrs(name);
        var attrs = _getNameAttrs(name);
        var oldValue = _getNameValue.call(this, name);

        if (this[attrs.s]){
            this[attrs.s].call(this, value);
        } else {
            this[name] = value;
        }

        if (this._watchCallbacks){
            this._watchCallbacks(name, oldValue, value);
        }
    }

    function _getNameValue(name) {
        _setNameAttrs(name);
        var attrs = _getNameAttrs(name);

        var oldValue = null;
        if (this[attrs.g]) {
            oldValue = this[attrs.g].call(this, name);
        } else {
            oldValue = this[name];
        }

        return oldValue;
    }

    function ST(obj){
        for (var p in obj) {
            _setNameValue.call(this, p, obj[p]);
        }
    }

    ST.prototype.set = function(name, value){
        if (typeof name === 'string'){
            _setNameValue.call(this, name, value);
        } else if (typeof name === 'object') {
            for (var p in name) {
                _setNameValue.call(this, p, name[p]);
            }
        }

        return this;
    };

    ST.prototype.get = function(name) {
        if (typeof name === 'string') {
            return _getNameValue.call(this, name);
        }
    };


    /*
    * 有什么方法可以既保证每个实例拥有自己的watch函数链又不发生污染？
    * 可以考虑这种方法：为每个实例添加一个_watchCallbacks属性，
    * 该属性是一个函数，将所有的watch函数链都存放到该函数上
    * */
    ST.prototype.watch = function(name, wcb) {
        var attrs = null;

        var callbacks = this._watchCallbacks;
        if (!callbacks) {
            callbacks = this._watchCallbacks = function(n, ov, nv) {
                var execute = function(cbs){
                    if (cbs && cbs.length > 0) {
                        for (var i = 0, len = cbs.length; i < len; i++) {
                            cbs[i](n, ov, nv);
                        }
                    }
                };
                //在函数作用域链中可以访问到callbacks变量
                execute(callbacks['_' + n]);
                execute(callbacks['*']);// 通配符
            };
        }

        var _name = '';
        if (typeof name === 'string') {
            _name = '_' + name;
        } else if (typeof name === 'function') {//如果name是函数，则所有属性改变时都会调用该函数
            _name = '*';
            wcb = name;
        }
        callbacks[_name] = callbacks[_name] ? callbacks[_name] : [];
        callbacks[_name].push(wcb);

        return {
            remove: function(){
                var idx = callbacks[_name].indexOf(wcb);
                if (idx > -1) {
                    callbacks[_name].splice(idx, 1);
                }
            }
        };
    };

    return ST;
})();

module.exports = Stateful;