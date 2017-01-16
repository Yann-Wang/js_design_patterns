/**
 * Created by a_wav on 2017/1/14.
 */
/**
 * 非继承的模板方法模式
 * @param param
 * @returns {F}
 * @constructor
 */
var Beverage = function (param) {
    
    var boilWater = function () {
        console.log('把水煮沸');
    };
    
    var brew = param.brew || function () {
            throw new Error('必须传递brew方法');
        };
    
    var pourInCup = param.pourInCup || function () {
            throw new Error('必须传递addCondiments方法');
        };
    
    var addCondiments = param.addCondiments || function () {
            throw new Error('必须传递addCondiments方法');
        };
    
    var F = function(){};

    /**
     * 模板方法
     */
    F.prototype.init = function () {
        boilWater();
        brew();
        pourInCup();
        addCondiments();
        console.log('-------------------------');
    };
    
    return F;
    
};

module.exports = Beverage;