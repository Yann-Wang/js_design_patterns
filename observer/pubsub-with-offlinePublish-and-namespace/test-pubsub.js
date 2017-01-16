/**
 * Created by a_wav on 2017/1/14.
 */

let Event = require('./pubsub-with-offlinePublish-and-namespace');
/**
 * 先发布后订阅
 */
Event.trigger('click',1);
Event.listen('click', function (a) {
    console.log(a);  // 1
});

/**
 * 使用命名空间
 */
Event.create('namespace1').listen('click',function (a) {
    console.log(a);  // 1
});
Event.create('namespace1').trigger('click',1);

Event.create('namespace2').listen('click',function (a) {
    console.log(a); // 2
});
Event.create('namespace2').trigger('click',2);

