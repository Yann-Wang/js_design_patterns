/**
 * Created by a_wav on 2017/1/15.
 */

var Event = require('./trigger-listen');

/**
 * 模拟Ajax
 * @param url
 * @param cb
 */
var ajax = function (url, cb) {
    setTimeout(cb,1000,{avatar:'avatar data'});
};



/**
 * 用户登录模块获取用户信息
 */
ajax('http://xxx.com?login',function(data){
    Event.trigger('loginSucc',data);
});

/**
 * 用户信息模块和header模块、nav模块、消息列表模块、购物车模块产生强耦合
 * 使用发布订阅模式解耦
 * @type {{setAvatar}}
 */
var header = (function(){
    Event.listen('loginSucc',function(data){
        header.setAvatar(data.avatar);
    });

    return {
        setAvatar: function(avatar){
            console.log('设置header模块的头像 '+avatar);
        }
    };
})();

var nav = (function(){
    Event.listen('loginSucc',function(data){
        nav.setAvatar(data.avatar);
    });

    return {
        setAvatar:function(avatar){
            console.log('设置nav模块的头像 '+avatar);
        }
    };
})();

var address = (function(){
    Event.listen('loginSucc',function(data){
        address.refresh(data.avatar);
    });

    return {
        refresh: function(avatar){
            console.log('刷新收货地址列表 '+avatar);
        }
    };
})();