/**
 * Created by a_wav on 2016/11/29.
 */

// 这就是我们要实现的通知 function
function disableFormSubmitButton(){


    // 首先获取要操作的 DOM 对象 ( 织入点 )，我们需要拦截所有 form，代码如下 $("form")
    // 因为一个页面可能会有多个 <form>，所以这里需要遍历
    $("form").each(function(i, v){
        // 原 submit 事件函數，备份成 _ invokesubmit，
        //_invokesubmit 是随便起的名字，充分利用了 javascript 的动态特性。
        var input_submit = v.querySelector("input[type='submit']");
        v._invokesubmit = input_submit.onsubmit ;
        // 替换原 submit 事件函數
        v.onsubmit = function(e){
            // 禁用提交表单按钮
            input_submit.disabled = true;
            v._invokesubmit(e);// 调用备份的 submit 事件函数
        };
    });
}

disableFormSubmitButton();



