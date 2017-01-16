/**
 * Created by a_wav on 2017/1/15.
 */

var proxy = function(myImage){
    var img = new Image();
    img.onload = function () {
        myImage.setSrc(this.src);
    };

    return {
        setSrc: function (src) {
            myImage.setSrc('./loading.jpg');
            img.src = src;
        }
    };
};