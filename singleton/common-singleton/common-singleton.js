/**
 * Created by a_wav on 2017/1/12.
 */
var Singleton = function(name){
    this.name = name;
    this.instance = null;
};

/*
Singleton.prototype.getName = function () {
    //console.log(this.name);
};
*/

Singleton.getInstance = function (name) {
    if(!this.instance){
        this.instance = new Singleton(name);
    }
    return this.instance;
};


module.exports = Singleton;