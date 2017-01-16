/**
 * Created by a_wav on 2017/1/14.
 */

let Beverage = require('./non-inheritance');

var Coffee = Beverage({
    brew: function () {
        console.log('用沸水冲泡咖啡');
    },
    pourInCup: function () {
        console.log('把咖啡倒进杯子');
    },
    addCondiments: function () {
        console.log('加糖和牛奶');
    }

});

var Tea = Beverage({
    brew: function () {
        console.log('用沸水浸泡茶叶');
    },
    pourInCup: function () {
        console.log('把茶倒进杯子');
    },
    addCondiments: function () {
        console.log('加柠檬');
    }
});

var coffee = new Coffee();
coffee.init();

var tea = new Tea();
tea.init();