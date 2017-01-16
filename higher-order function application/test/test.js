/**
 * Created by a_wav on 2016/11/28.
 */
/*
var ss = setTimeout(function () {
    console.log(100);
}, 3000);

setTimeout(function () {
    console.log("timer ", ss); // timer 1
    //clearTimeout(ss);
    if(ss){
        console.log("ssd");
    }
}, 5000);
*/

/*
* result:
* 100
* timer x(x是一个非零的值由浏览器具体实现决定，同一个浏览器在不同的情况下，返回值也不同)
* ssd
* */



/* from w3.org:
* If previous handle was provided, let handle be previous handle;
 * otherwise, let handle be a user-agent-defined integer
  * that is greater than zero that will identify the timeout to be set
  * by this call in the list of active timers.
* */


var ss = setTimeout(function () {
    console.log(100);
}, 3000);

setTimeout(function () {
    console.log("timer ", ss); // timer 1
    //clearTimeout(ss);
    if(ss){
        console.log("ssd");
    }
}, 1500);



/*
* result:
* timer x(x是一个非零的值由浏览器具体实现决定，同一个浏览器在不同的情况下，返回值也不同)
* ssd
* 100
* */

