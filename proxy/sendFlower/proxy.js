/**
 * Created by a_wav on 2017/1/15.
 */

var proxy = function(target){
    return {
        receiveFlower: function (Flower) {
            target.listenGoodMood(function () {
                var flower = new Flower();
                target.receiveFlower(flower);
            });
        }
    };
};

module.exports = proxy;