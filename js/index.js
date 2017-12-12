(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //显示遮罩层
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层
    function hideMask(){

        $("#mask").hide();
    }
    showMask();
    //弹窗页确定按钮
    $('.tcBtn').click(function () {
        window.location.href = 'index.html';
    });
    //弹窗页关闭按钮
    $('.close').click(function () {
        hideMask();
        $('.con-tc').hide();
    });
});
