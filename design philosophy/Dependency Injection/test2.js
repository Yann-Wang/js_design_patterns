/**
 * Created by a_wav on 2016/11/28.
 */
const injector = require('./injector');
const expect   = require('expect.js');


var service = function() {
    return { name: 'Service' };
};
var router = function() {
    return { name: 'Router' };
};

injector.register('router',router);
injector.register('service',service);


var doSomething = injector.resolve('router,service,', function(a, b, c) {
    expect(a().name).to.be('Router');

    expect(b().name).to.be('Service');
    expect(c).to.be('Other');
});
doSomething("Other");

