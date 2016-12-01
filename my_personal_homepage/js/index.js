//锚点滑动跳转
$(document).ready(function () {
    $('.anchor-wel').click(function () {
        $('html,body').animate({scrollTop: $('#welcome').offset().top}, 260);
    });
    $('.anchor-abt').click(function () {
        $('html,body').animate({scrollTop: $('#about').offset().top}, 260);
    });
    $('.anchor-pro').click(function () {
        $('html,body').animate({scrollTop: $('#project').offset().top}, 260);
    });
    $('.anchor-con').click(function () {
        $('html,body').animate({scrollTop: $('#contact').offset().top}, 260);
    });
    //为导航按钮添加点击样式
    $('#nav a').click(function () {
        $('#nav a').removeClass("bg");
        $(this).addClass("bg");
    });
});
//判断锚点是否激活并为按钮添加点击样式
$(function () {
    $(window).scroll(function () {
        //为页面添加页面滚动监听事件
        var h = $(window).scrollTop() + 350; //滚动条距离顶端值+调校值
        for (i = 1; i < 5; i++) {             //加循环
            if ($(".a" + i).offset().top <= h) { //判断滚动条位置
                $('#nav a').removeClass("bg"); //清除c类
                $(".a" + i + i).addClass("bg");	//给当前导航加c类
            }
        }
    });
});
//手机屏幕下点击触发下拉菜单
$(".btn-bar").click(function () {
    $("#nav").slideToggle();
});
//pc下点击菜单水波纹特效
$("#nav li a").click(function (e) {
    $(".ripple").remove();
    var posX = $(this).offset().left,
        posY = $(this).offset().top,
        buttonWidth = $(this).width(),
        buttonHeight = $(this).height();
    $(this).prepend("<span class='ripple'></span>");
    if (buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
    } else {
        buttonWidth = buttonHeight;
    }
    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;
    $(".ripple").css({
        width: buttonWidth,
        height: buttonHeight,
        top: y + 'px',
        left: x + 'px'
    }).addClass("rippleEffect");
});











