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

//h5 video控件
btn.onclick = function () {
    // console.log(v1.paused);
    if (v1.paused) {
        v1.play();
        this.innerHTML = "<img class='btn' src='img/pause.png' title='点击暂停'>";
        ad.style.display = "none"
    } else {
        v1.pause();
        this.innerHTML = "<img class='btn' src='img/play.png' title='点击播放'/>";
        ad.style.display = "block"
    }
};
var container = document.querySelector(".container");
container.onmouseenter = function () {
    btn.style.display = "block";
};
container.onmouseleave = function () {
    btn.style.display = "none";
};
v1.addEventListener('ended', function () {
    btn.innerHTML = "<img class='btn' src='img/play.png' title='点击重新播放'/>";
});
v1.onplay = function () {
    // console.log("开始播放");
    ad.style.display = "none";
};
v1.onpause = function () {
    // console.log("播放暂停");
    ad.style.display = "block";
};

// nivo-slider轮播特效
// $('#slider').nivoSlider({
//     effect: 'random', //效果
//     slices: 15, //切片效果时的数量
//     boxCols: 8, //格子效果列
//     animSpeed: 500, //动画速度
//     pauseTime: 3000, //暂停时间
//     directionNav: false, //不使用左右导航
// });
$(window).load(function () {
    $('#slider').nivoSlider({});
});