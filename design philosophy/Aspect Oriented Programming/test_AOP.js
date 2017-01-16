/**
 * Created by a_wav on 2016/11/28.
 */
var func = function(){
    console.log(2);
};

func = func.before(function () {
    console.log(1);
}).after(function () {
    console.log(3);
});

func();