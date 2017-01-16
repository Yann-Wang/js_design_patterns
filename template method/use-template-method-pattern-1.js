/**
 * Created by a_wav on 2017/1/14.
 */
let Beverage = require('./based-on-inheritance');

let CoffeeWithHook = function(){};

CoffeeWithHook.prototype = new Beverage();

CoffeeWithHook.prototype.brew = function () {
    console.log('用沸水冲泡咖啡');
};

CoffeeWithHook.prototype.pourInCup = function () {
    console.log('把咖啡倒进杯子');
};

CoffeeWithHook.prototype.addCondiments = function () {
    console.log('加糖和牛奶');
};

CoffeeWithHook.prototype.customerWantsCondiments = function () {
    //return window.confirm('请问需要调料吗？');
    return false;
};

let coffeeWithHook = new CoffeeWithHook();
coffeeWithHook.init();