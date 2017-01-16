/**
 * Created by a_wav on 2017/1/14.
 */
var Singleton = require('./common-singleton');

var a = Singleton.getInstance('aa');
var b = Singleton.getInstance('bb');

console.log(a===b);