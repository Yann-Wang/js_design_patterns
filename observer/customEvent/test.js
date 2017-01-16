/**
 * Created by a_wav on 2016/11/28.
 */

var customEvent = require('./customEvent');

function handleMessage(event){
    console.log("Message received: " + event.message);
}

//创建一个新对象
var target = new customEvent();

target.addHandler("message", handleMessage);

target.fire({type:"message",message:"Hello world!"});

target.removeHandler("message",handleMessage);

target.fire({type:"message",message:"hello world!"});


