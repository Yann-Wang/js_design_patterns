/**
 * Created by a_wav on 2016/11/27.
 */
var Stateful = require('./getter_setter');

console.log(Stateful);
var stateful = new Stateful();



function A(name){
    this.name = name;
}
A.prototype = stateful;
A.prototype._NameSetter = function(n) {
    this.name = n;
};
A.prototype._NameGetter = function() {
    return this.name;
};



function B(name) {
    this.name = name;
}
B.prototype = stateful;
B.prototype._NameSetter = function(n) {
    this.name = n;
};
B.prototype._NameGetter = function() {
    return this.name;
};



var a = new A();
var handle = a.watch('Name', function(name, oldValue, newValue){
    console.log(name + ' be changed from ' + oldValue + ' to ' + newValue);
});
a.set('Name', 'AAA');
console.log(a.name);



var b = new B();
b.set('Name', 'BBB');
console.log(b.get('Name'));




a.watch(function(name, ov, nv) {
    console.log('* ' + name + ' ' + ov + ' ' + nv);
});
a.set({
    foo: 'FOO',
    goo: 'GOO'
});

console.log(a.get('goo'));

a.set('Name', 'AAA+'); //触发了两个watch func

handle.remove();
a.set('Name', 'new AAA'); // 只触发了一个watch func
console.log(a.get('Name'), b.get('Name'));