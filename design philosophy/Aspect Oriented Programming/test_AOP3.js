/**
 * Created by a_wav on 2016/11/29.
 */

const Aspects = require('./AOP3');

function Person() {
    this.say = function (name, lang) {
        console.log("我的名字叫做" + name + ",专注于" + lang + "……");
    };
}

(function () {
    var t = new Person;
    var a = new Aspects;
    t = a.before(t, "say", function () {
        console.log("请你介绍一下自己！");
    });
    console.log("===========================");
    t.say("司徒正美", "javascript");
})();



