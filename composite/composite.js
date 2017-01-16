/**
 * Created by a_wav on 2017/1/14.
 */

let Composite = function () {
    this.parent = null;
    this.children = [];
};

Composite.prototype.add = function (child) {
    child.parent = this; // 设置对父节点的引用
    this.children.push(child);
};

Composite.prototype.execute = function () {
    let i=0,child;
    while(child=this.children[i++]){
        child.execute();
    }
};



let Child = function (action) {
    this.action = action;
};

Child.prototype.add = function () {
    throw new Error('文件下面不能再添加文件');
};

Child.prototype.execute = function () {
    console.log(this.action);
};

Child.prototype.remove = function () {
    if(!this.parent){
        return;
    }

    let children = this.parent.children;
    let ll       = children.length -1;

    while(ll>=0){
        let child = children[ll];
        if(child === this){
            children.splice(ll,1);
        }
    }

};



exports.Composite = Composite;
exports.Child = Child;