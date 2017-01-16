/**
 * Created by a_wav on 2017/1/14.
 */
let composite = require('./composite');
let Composite = composite.Composite;
let Child     = composite.Child;


// part1 includes openAc

let openAc = new Child('打开空调');

// part2 includes openTv and openSound

let openTv = new Child('打开电视');
let openSound = new Child('打开音响');

let part2 = new Composite();
part2.add(openTv);
part2.add(openSound);

// part3 includes closeDoor, openPc, openQQ

let closeDoor = new Child('关门');
let openPc = new Child('打开电脑');
let openQQ = new Child('登录QQ');

let part3 = new Composite();
part3.add(closeDoor);
part3.add(openPc);
part3.add(openQQ);

let tree = new Composite();
tree.add(openAc);
tree.add(part2);
tree.add(part3);

/**
 * 对组合树进行深度优先搜索
 */
tree.execute();

