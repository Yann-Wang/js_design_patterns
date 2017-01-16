/**
 * Created by a_wav on 2017/1/14.
 */
/**
 * 基于继承实现模板方法模式
 * @constructor
 */
var Beverage = function(){};

Beverage.prototype.boilWater = function () {
    console.log('把水煮沸');
};

Beverage.prototype.brew = function(){
    throw new Error('子类必须重写brew方法');
};

Beverage.prototype.pourInCup = function () {
    throw new Error('子类必须重写pourInCup方法');
};

Beverage.prototype.addCondiments = function () {
    throw new Error('子类必须重写addCondiments方法');
};

Beverage.prototype.customerWantsCondiments = function () {
    return true;
};

Beverage.prototype.init = function () {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if(this.customerWantsCondiments()){
        this.addCondiments();
    }
};

module.exports = Beverage;