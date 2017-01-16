/**
 * Created by a_wav on 2017/1/15.
 */

var Proxy = require('./proxy');
var Event = require('./trigger-listen');

var Flower = function(){
    this.flower = '君子兰';
};

var xiaoming = {
    sendFlower: function (target) {
        target.receiveFlower(Flower);
    }
};

/**
 * 女神
 * @type {{receiveFlower: A.receiveFlower, listenGoodMood: A.listenGoodMood}}
 */
var A = {
    receiveFlower: function (flower) {
        console.log('收到花: '+flower.flower);
    },
    listenGoodMood: function (fn) {
        Event.listen('goodmood',fn);
    }
};

var proxy = Proxy(A);

xiaoming.sendFlower(proxy);

/**
 * 2秒后心情好
 */
setTimeout(function () {
    Event.trigger('goodmood');
},2000);