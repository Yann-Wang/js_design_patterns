/**
 * Created by a_wav on 2016/11/28.
 */

const injector = require('./injector2');
const expect   = require('expect.js');


var service = function() {
    return { name: 'Service' };
};
var router = function() {
    return { name: 'Router' };
};

injector.register('router',router);
injector.register('service',service);



var doSomething = injector.resolve(['service', 'router'], function(other) {
    expect(this.service().name).to.be('Service');
    expect(this.router().name).to.be('Router');
    expect(other).to.be('Other');
});
doSomething("Other");
